const express = require("express");
const cheerio = require("cheerio");
const tinyreq = require("tinyreq");
const fs = require("fs");
const log = require("log4js").getLogger("main");

const NGREGEX = new RegExp("ng-");
const BUILD_PATH = __dirname + "/build/";
const REGEX_ATTRIBUTES = [
    "*[ng-ignored-model]",
    "*[ng-ignored-scope]",
    "*[ng-ignored-binding]",
    "*[ng-ignored-repeat]",
    "*[ng-ignored-disabled]"
];

fs.readFile(__dirname + "/test/index.html", "utf8", (error, data) => {
    if (error) {
        log.error(error);
        return;
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

    fs.open(BUILD_PATH + "/result.html", "w+", (err, data) => {
        if (err) {
            log.error(err);
            return;
        }

        let mainContent = $("html").html();
        fs.writeFile(BUILD_PATH + "/result.html", mainContent, (err) => {
            if (err) {
                log.error(err);
                return;
            }
            log.info("File written");
        });
    });

});
