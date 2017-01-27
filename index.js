#!/usr/bin/env node

const express = require("express");
const bodyparser = require("body-parser");
const cheerio = require("cheerio");
const tinyreq = require("tinyreq");
const fs = require("fs");
const R = require("ramda");

const app = express();
const log = require("log4js").getLogger("main");

const ID = "#uiViewContainer";
const PROPERTIES = require("./properties");
const NGREGEX = new RegExp("ng-");
const BUILD_PATH = PROPERTIES.BUILD_PATH;
const REGEX_ATTRIBUTES = PROPERTIES.REGEX_ATTRIBUTES;
const ListeningPort = 3000;

function parseHTML(data, path) {

    const HTMLREGEX = new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");

    return new Promise((resolve, reject) => {

        if (!HTMLREGEX.test(data)){
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

        fs.open(BUILD_PATH + path, "w+", (err, data) => {
            if (err) {
                reject(err);
            }

            let mainContent = $(ID).html();

            if (!mainContent) {
                reject("mainContent undefined");
            }

            fs.writeFile(path, mainContent, (err) => {
                if (err) {
                    reject(err);
                }

                resolve("File written");
            });
        });

    });

}

function ServerListening(req, res, next) {
    log.info(" [listening on port: " + ListeningPort + "].");
};

function uploadHandler(req, res, next) {
    let html = req.body.text;
    let url = req.body.url;
    log.info("params :", html, url);

    parseHTML(html, url)
        .then((data) => {
            log.info(data);
            res.status(200).send(data);
            return next();
        })
        .catch((error) => {
            log.error(error);
            res.status(500).send(null);
            return next();
        });
}

app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(bodyparser.json({
    limit: "60MB"
}));

app.use(express.static(__dirname + "/static"));

let server = app.listen(ListeningPort, ServerListening);

app.post("/updateFile/", uploadHandler);
