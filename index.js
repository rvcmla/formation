let utils = require("./utils.js")
let products = require("./products.js")
let httpUtils = require("./httpUtils.js")
let expressUtils = require("./expressUtils.js")

var obj = utils.retrieveData();
var readline = require('readline'); //je crée une variable avec l'import


httpUtils.startHttpServer()
expressUtils.startExpressServer();

var rl = readline.createInterface({input : process.stdin, output: process.stdout, terminal: false});
rl.on('line', function(line) {
    if (line.startsWith(products.phrase)) {
        var array = line.split(' ')
        products.orderProductById(obj, array[array.length-1], () => {
            products.getAllProducts(obj)
        }) //Le deuxième paramètre est la fonction callback
    }
    
})

products.getAllProducts(obj)





