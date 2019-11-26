const express = require('express')
const path = require('path')
const moment = require('moment')
const port = 8081;

function startExpressServer() {   
    const expressServer = express();
    moment.locale('fr');
    expressServer.listen(port, '127.0.0.1', () => {
        console.log('Server has listening on port '+port)
    });

    templating(expressServer);
    useMiddleWare(expressServer);

    treatPugGetQuery(expressServer);

}

function getHttpHandler(req, res) {
    res.send('Hello World from Express !')
}

function getPugHttpHandler(req, res) {
    res.render("homepage")
}

function templating(expressServer) {
    expressServer.set("view engine", "pug");
    expressServer.set("views", path.join(__dirname, "views"));
}

function treatGetQuery(expressServer) {
    expressServer.get('/', getHttpHandler )
}

function treatPugGetQuery(expressServer) {
    expressServer.get('/', getPugHttpHandler)
}

function useMiddleWare(expressServer) {
    expressServer.use(function (req, res, next) {
        console.log('Time:', moment().format('LLLL'));
        next();
      });
}

module.exports = {
    startExpressServer
};