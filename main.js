#!/usr/bin/env node

const express = require("express");
const bodyparser = require("body-parser");
const cheerio = require("cheerio");
const tinyreq = require("tinyreq");
const fs = require("fs");
const R = require("ramda");
const cluster = require("cluster");

const log = require("log4js").getLogger("main");

const ID = "#uiViewContainer";
const PROPERTIES = require("./properties");
const NGREGEX = new RegExp("ng-");
const BUILD_PATH = PROPERTIES.BUILD_PATH + "/easyBet/templates";
const REGEX_ATTRIBUTES = PROPERTIES.REGEX_ATTRIBUTES;
const ListeningPort = 10000;

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
            reject("mainContent undefined");
        }

        fs.writeFile(BUILD_PATH + path + "index.html", mainContent, (err) => {
            if (err) {
                reject(err);
            }

            resolve("File written");
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

if (cluster.isMaster) {

    cluster.on("online", worker => {
        log.info("Worker " + worker.process.pid + " is online")
    })

    cluster.on("exit", (worker, code, signal) => {
        log.info("Worker " + worker.process.pid + " died with code: " + code + ", and signal: " + signal)
        log.info("Starting a new worker")
        cluster.fork()
    })

    let numWorkers = require("os").cpus().length

    for (let i = 0; i < numWorkers; i++)
        cluster.fork()

} else {

    const app = express();

    app.use(bodyparser.json({
        limit: "60mb"
    }));

    app.use(bodyparser.urlencoded({
        limit: "60mb",
        extended: false
    }));

    app.use(express.static(__dirname + "/static"));

    let server = app.listen(ListeningPort, "0.0.0.0", ServerListening);

    app.post("/updateFile/", uploadHandler);
}
