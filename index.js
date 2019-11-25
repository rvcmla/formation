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
    if (line.startsWith(utils.phrase)) {
        var array = line.split(' ')
        utils.orderProductById(obj, array[array.length-1], filenameWithCurrent, () => {
        utils.getAllProducts(obj)
        }) //Le deuxième paramètre est la fonction callback
    }
    
})

utils.getAllProducts(obj)

function init() {
    try {
        obj = JSON.parse(contents)
    } catch (e) {
        console.log(e)
    }
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





