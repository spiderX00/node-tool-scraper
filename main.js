#!/usr/bin/env node

const cheerio = require("cheerio");
const fs = require("fs");
const beautifier = require("node-js-beautify");
const dedent = require("dedent-js");

const log = require("log4js").getLogger("node-tool");
const b = new beautifier();

const MAIN_ID = "#main";
const CONTAINER_ID = "#uiViewContainer";
const PROPERTIES = require("./properties");
const NGREGEX = new RegExp("ng-");
const BUILD_PATH = PROPERTIES.BUILD_PATH;
const REGEX_ATTRIBUTES = PROPERTIES.REGEX_ATTRIBUTES;
const REGEX_CLASSES = PROPERTIES.REGEX_CLASSES;
const REGEX_COMMENT = new RegExp(/<!--(.*?)-->/, "g");
const COMMENT_NODE = "comment";
const OPENED = true;

let filesDictionary = {};

function parseHTML(path) {

    const HTMLREGEX = new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");

    return new Promise((resolve, reject) => {

        fs.readFile(path, (error, data) => {
            let $ = cheerio.load(data);

            if (!HTMLREGEX.test(data) || !$(CONTAINER_ID).html()) {
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

            $("*").each((index, el) => {
                let element = $(el);
                REGEX_CLASSES.forEach((regClass) => {
                    element.removeClass(regClass);
                });
            });


            $(`*[class*="ng-"]`).each((index, el) => {
                let element = $(el);
                let classes = element.attr("class").split(' ');
                classes.forEach((regClass) => {
                    if (NGREGEX.test(regClass)) {
                        element.removeClass(regClass);
                    }
                });
            });

            $(CONTAINER_ID).addClass("main-content");
            let mainContent = $(CONTAINER_ID).html();

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
                return resolve(path + ":: File(s) written");
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
