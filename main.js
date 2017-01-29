#!/usr/bin/env node

const cheerio = require("cheerio");
const fs = require("fs");

const log = require("log4js").getLogger("node-tool");

const ID = "#uiViewContainer";
const PROPERTIES = require("./properties");
const NGREGEX = new RegExp("ng-");
const BUILD_PATH = PROPERTIES.BUILD_PATH + "/easyBet/templates";
const REGEX_ATTRIBUTES = PROPERTIES.REGEX_ATTRIBUTES;

function parseHTML(data, path) {

    const HTMLREGEX = new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");

    return new Promise((resolve, reject) => {

        if (!HTMLREGEX.test(data)) {
            reject("Invalid file");
        }

        let $ = cheerio.load(data);

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

        let mainContent = $(ID).html();

        if (!mainContent) {
            reject("main content undefined");
        }

        fs.writeFile(BUILD_PATH + path + "index.html", mainContent, (err) => {
            if (err) {
                reject(err);
            }

            resolve("File(s) written");
        });

    });

}

if (!process.argv[2]) {
    log.error("Please insert a path")
    return;
}

let file = process.argv[2];

parseHTML(file)
    .then((results) => {
        log.info(results);
    })
    .catch((error) => {
        log.error(error);
    })
