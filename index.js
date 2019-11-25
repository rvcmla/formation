let fs = require('fs')
var readline = require('readline'); //je crée une variable avec l'import

const filename = "products.json";
const filenameWithCurrent = `${__dirname}/${filename}`;
const contents = fs.readFileSync(filenameWithCurrent, 'utf8')
//console.log(contents)

var obj;

var rl = readline.createInterface({input : process.stdin, output: process.stdout, terminal: false});
rl.on('line', function(line) {
    if (line.startsWith("I want product")) {
        var array = line.split(' ')
        orderProductById(array[array.length-1], () => {
            getAllProducts()
        }) //Le deuxième paramètre est la fonction callback
    }
    
})

init();
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

function orderProductById(id, callback) {
    var found;
    obj.forEach((product) => {
        if (product.id == id) {
            product.orders_counter += 1;
            console.log('Commande terminée. Voici votre fichier : ' + product.file_link)
            found = true
        }
    })
    if (found)
        saveToFile(obj, callback)
    else
        callback()
}

function saveToFile(obj, callback) {
    fs.writeFile(filenameWithCurrent, JSON.stringify(obj, null, 2), (err) => {
        console.log('Sauvegardée en fichier.')
        callback()
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





