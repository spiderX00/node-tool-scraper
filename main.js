#!/usr/bin/env node

const cheerio = require("cheerio");
const fs = require("fs");
const dedent = require("dedent-js");
const util = require("util");

const log = require("log4js").getLogger("node-tool");

const MAIN_ID = "#main";
const CONTAINER_ID = "#uiViewContainer";
const PROPERTIES = require("./properties");
const NGREGEX = new RegExp("ng-");
const BUILD_PATH = PROPERTIES.BUILD_PATH;
const REGEX_ATTRIBUTES = PROPERTIES.REGEX_ATTRIBUTES;
const ROUTES = PROPERTIES.ROUTES;
let regexClasses = PROPERTIES.REGEX_CLASSES;
const REGEX_COMMENT = new RegExp(/<!--(.*?)-->/, "g");
const COMMENT_NODE = "comment";
const OPENED = true;

let filesDictionary = {};

function parseHTML(path) {

    const HTMLREGEX = new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");

    return new Promise((resolve, reject) => {

        fs.readFile(path, (error, data) => {
            let $ = cheerio.load(data);
            let uiView = $(`*[ui-view="mainView"]`).html();

            if (!uiView) {
                return reject(path + ":: Invalid file");
            }

            REGEX_ATTRIBUTES.forEach((regAttribute) => {
                $(regAttribute).each((index, el) => {
                    let element = $(el);
                    Object.keys(el.attribs).forEach((name) => {
                        if (NGREGEX.test(name)) {
                            element.removeAttr(name);
                        }
                    });
                });
            });

            $(`*[class*="ng-"]`).each((index, el) => {
                let element = $(el);
                let classes = element.attr("class").split(' ');
                classes.forEach((regClass) => {
                    if (NGREGEX.test(regClass)) {
                        regexClasses.push(regClass);
                        $("*").removeClass(regClass);
                    }
                });
            });

            $("*").each((index, el) => {
                let element = $(el);
                regexClasses.forEach((regClass) => {
                    element.removeClass(regClass);
                });
            });

            let mainContent = $(`*[ui-view="mainView"]`).html();

            if (!mainContent) {
                return reject(path + ":: main content undefined");
            }

            let htmlContent = `{% extends "SkwebIncludeBundle:Include:base_admin.html.twig" %} \n {% block Skweb_content %} \n {%set id_c=app.request.query.get("id_c")%} \n {%if(is_granted("ROLE_ADMIN"))%} \n  {{ render(controller("SkwebAdminpageBundle:AdminCrud:menuAdmin",{'id_c':id_c})) }} \n {%endif%} \n\n  <div id="uiViewContainer" class="main-content span12">` + "\n" +
                mainContent.replace(REGEX_COMMENT, ``) + "\n\n" +
                `</div> \n\n {% endblock Skweb_content %}`.trim();

            fs.writeFile(path, dedent(htmlContent), (err) => {
                if (err) {
                    return reject(path + ":: " + err);
                }

                let phpPath = path.replace("html.twig", "php");
                let content = `/** \n * addSkin \n * @Route("/skin/insert", name="admin_skin_insert") \n * @Template("%s") \n  */ \n\n public function FooAction() { \n //#query \n //#option  \n //#code \n return array('id_c' => 0);  }`
                content = util.format(content, path.replace("test/smart_crew/bo/", ""));
                log.info(content);
                
                return resolve(path + ":: File(s) written");

                /*

                fs.writeFile(phpPath, dedent(content), (err) => {
                    if (err) {
                        return reject(phpPath + ":: " + err);
                    }

                    return resolve(path + ":: File(s) written");
                });

                */

            });

        });

    });

}

if (!process.argv[2]) {
    return log.error("Please insert a file or a list of file");
}

let args = process.argv.splice(2);

args.forEach((arg) => {
    if (!filesDictionary.hasOwnProperty(arg)) {
        filesDictionary[arg] = OPENED;
        parseHTML(arg)
            .then((results) => {
                log.info(results);
            })
            .catch((error) => {
                log.error(error);
            });
    }
});
