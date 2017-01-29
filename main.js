#!/usr/bin/env node

const cheerio = require("cheerio");
const fs = require("fs");
const util = require("util");

const log = require("log4js").getLogger("node-tool");

const ID = "#uiViewContainer";
const PROPERTIES = require("./properties");
const NGREGEX = new RegExp("ng-");
const BUILD_PATH = PROPERTIES.BUILD_PATH;
const REGEX_ATTRIBUTES = PROPERTIES.REGEX_ATTRIBUTES;
const COMMENT_NODE = "comment";

function parseHTML(path) {

    const HTMLREGEX = new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");

    return new Promise((resolve, reject) => {

        fs.readFile(path, (error, data) => {
            let $ = cheerio.load(data);

            if (!HTMLREGEX.test(data)) {
                reject("Invalid file");
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

            $("*").contents().each(() => {
                if (this.nodeType === COMMENT_NODE) {
                    $(this).remove();
                }
            });

            $(ID).addClass("main-content");
            let mainContent = $(ID).html();

            if (!mainContent) {
                reject("main content undefined");
            }

            let htmlContent = `
              {% extends "SkwebIncludeBundle:Include:base_admin.html.twig" %}
                {% block Skweb_content %}
                  {%set id_c=app.request.query.get("id_c")%}
                  {%if(is_granted("ROLE_ADMIN"))%}
                      {{ render(controller("SkwebAdminpageBundle:AdminCrud:menuAdmin",{'id_c':id_c})) }}
                  {%endif%}
            ` + mainContent + `
              {% endblock Skweb_content %}
            `;

            fs.writeFile(BUILD_PATH + "/result.html", util.format(htmlContent), (err) => {
                if (err) {
                    reject(err);
                }

                resolve("File(s) written");
            });

        });

    });

}

if (!process.argv[2]) {
    log.error("Please insert a file");
    return;
}

let file = process.argv[2];

parseHTML(file)
    .then((results) => {
        log.info(results);
    })
    .catch((error) => {
        log.error(error);
    });
