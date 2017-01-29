#!/usr/bin/env node

const cheerio = require("cheerio");
const fs = require("fs");
const util = require("util");
const beautifier = require('node-js-beautify');

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

            $(CONTAINER_ID).addClass("main-content");
            let mainContent = $(CONTAINER_ID).html();

            if (!mainContent) {
                return reject(path + ":: main content undefined");
            }

            let htmlContent = [`
              {% extends "SkwebIncludeBundle:Include:base_admin.html.twig" %}
                {% block Skweb_content %}
                  {%set id_c=app.request.query.get("id_c")%}
                  {%if(is_granted("ROLE_ADMIN"))%}
                      {{ render(controller("SkwebAdminpageBundle:AdminCrud:menuAdmin",{'id_c':id_c})) }}
                  {%endif%}`,
                `<div id="uiViewContainer" class="main-content span12">`
                mainContent,
                `</div>`,
                `{% endblock Skweb_content %}`
            ].join('').replace(REGEX_COMMENT, ``).trim();

            htmlContent = util.format(htmlContent);

            fs.writeFile(path, b.beautify_html(htmlContent), (err) => {
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
let filesDictionary = {};

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
