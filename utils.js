let fs = require('fs')
const phrase = "Je voudrai le produit";

function orderProductById(obj, id, filenameWithCurrent, callback) {
    var found;
    obj.forEach((product) => {
        if (product.id == id) {
            product.orders_counter += 1;
            console.log('Commande terminée. Voici votre fichier : ' + product.file_link)
            found = true
        }
    })
    if (found)
        saveToFile(obj, filenameWithCurrent, callback)
    else
        callback()
}

function saveToFile(obj, filenameWithCurrent, callback) {
    fs.writeFile(filenameWithCurrent, JSON.stringify(obj, null, 2), (err) => {
        console.log('Sauvegardée en fichier.')
        callback()
    })
}

function getAllProducts(obj) {
    console.log('Bienvenue. Voici les produits disponibles')
    obj.forEach((product) => {
        console.log(`${product.id} - ${product.name} / ${product.EUR_price} - ${product.orders_counter}`)   
    })
}

module.exports = {
    orderProductById,
    getAllProducts,
    phrase
};