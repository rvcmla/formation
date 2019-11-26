let fs = require('fs')

const repository = `${__dirname}/products.json`;

/*function orderProductById(obj, id, callback) {
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
}*/

function saveData(obj, callback) {
    fs.writeFile(repository, JSON.stringify(obj, null, 2), (err) => {
        console.log('Sauvegardée en fichier.')
        callback()
    })
}

function retrieveData() {
    const contents = fs.readFileSync(repository, 'utf8');
    try {
        obj = JSON.parse(contents)
    } catch (e) {
        console.log(e)
    }
    return obj;
}

module.exports = {
    retrieveData,
    saveData
};