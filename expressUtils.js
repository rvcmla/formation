const express = require('express')
const port = 8081;

function startExpressServer() {   
    const expressServer = express();
    
    expressServer.listen(port, '127.0.0.1', () => {
        console.log('Server has listening on port '+port)
    });

    expressServer.get('/', (req, res) => res.send('Hello World from Express !'))
}

module.exports = {
    startExpressServer
};