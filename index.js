let fs = require('fs')

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

const contents = fs.readFileSync(`${__dirname}/products.json`, 'utf8')
console.log(contents)
try {
    var obj = JSON.parse(contents)
    console.log(obj)
} catch (e) {
    console.log(contents)
}



