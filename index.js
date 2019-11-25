let fs = require('fs')
let utils = require("./utils.js")

var readline = require('readline'); //je crée une variable avec l'import

const filename = "products.json";
const filenameWithCurrent = `${__dirname}/${filename}`;
const contents = fs.readFileSync(filenameWithCurrent, 'utf8')
//console.log(contents)

var obj;
init();

var rl = readline.createInterface({input : process.stdin, output: process.stdout, terminal: false});
rl.on('line', function(line) {
    if (line.startsWith("I want product")) {
        var array = line.split(' ')
        utils.orderProductById(obj, array[array.length-1], filenameWithCurrent, () => {
            getAllProducts()
        }) //Le deuxième paramètre est la fonction callback
    }
    
})


getAllProducts()

function init() {
    try {
        obj = JSON.parse(contents)
    } catch (e) {
        console.log(e)
    }
}

function getAllProducts() {
    console.log('Bienvenue. Voici les produits disponibles')
    obj.forEach((product) => {
        console.log(`${product.id} - ${product.name} / ${product.EUR_price} - ${product.orders_counter}`)   
    })
}





/*const contents = fs.readFile(`${__dirname}/products.json`, 'utf8', (err, content) => {
console.log(contents)
try {
    var obj = JSON.parse(contents)
    console.log(obj)
} catch (e) {
    console.log(contents)
}
})
*/





