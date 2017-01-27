#!/usr/bin/env node

const express = require("express");
const cheerio = require("cheerio");
const tinyreq = require("tinyreq");
const fs = require("fs");
const log = require("log4js").getLogger("main");

const ID = "#uiViewContainer";
const PROPERTIES = require("./properties");
const NGREGEX = new RegExp("ng-");
const BUILD_PATH = PROPERTIES.BUILD_PATH;
const REGEX_ATTRIBUTES = PROPERTIES.REGEX_ATTRIBUTES;

function parseReqHTML(urlParam) {

    tinyreq(urlParam, (err, body) => {

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

            let mainContent = $(ID).html();
            fs.writeFile(BUILD_PATH + "/result.html", mainContent, (err) => {
                if (err) {
                    log.error(err);
                    return;
                }

                log.info("File written");
            });
        });

    });

}

function parseHTML(path) {

    const HTMLREGEX = new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");

    fs.readFile(path, "utf8", (error, data) => {
        if (error) {
            log.error(error);
            return;
        }

        if (HTMLREGEX.test(data)) {
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

                let mainContent = $(ID).html();
                fs.writeFile(BUILD_PATH + "/result.html", mainContent, (err) => {
                    if (err) {
                        log.error(err);
                        return;
                    }

                    log.info("File written");
                });
            });
        }

    });
}

function ScanFolder(path) {
    fs.readdir(path, (err, files) => {
        files.forEach((file) => {
            let stats = fs.lstatSync(file);
            if (stats.isDirectory()) {
                ScanFolder(file);
            } else {
                parseHTML(path);
            }
        });
    });
}

if (process.argv[2]) {
    let path = process.argv[2];
    ScanFolder(path);
}
