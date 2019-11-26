var http = require('http');

const port = 8080;

function startHttpServer() {   
    const server = http.createServer(httpHandler)
    
    server.listen(port, '127.0.0.1', () => {
        console.log('Server has listening on port '+port)
    });
}

function treatPostQuery(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        console.log(body);
        res.end('ok');
    });
}

function treatGetQuery(req, res) {
    const url =  req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/about') {
        res.write('<h1>A propos</h1>')
    } else if (url === '/contact') {
        res.write('<h1>Contact</h1>')
    } else {
        res.write('<h1>Index</h1>')
    }
    res.end()
}

function httpHandler(req, res) {
        res.statusCode = 200;
        if (req.method === 'POST') {
            treatPostQuery(req, res)
        } else {
            treatGetQuery(req, res)
        }
}

module.exports = {
    startHttpServer
};
