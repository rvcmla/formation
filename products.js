let utils = require("./utils.js")

const phrase = "Je voudrai le produit";

function getAllProducts(obj) {
    console.log('Bienvenue. Voici les produits disponibles')
    obj.forEach((product) => {
        console.log(`${product.id} - ${product.name} / ${product.EUR_price} - ${product.orders_counter}`)   
    })
}

function orderProductById(obj, id, callback) {
    var found;
    obj.forEach((product) => {
        if (product.id == id) {
            product.orders_counter += 1;
            console.log('Commande terminée. Voici votre fichier : ' + product.file_link)
            found = true
        }
    })
    if (found)
        utils.saveData(obj, callback)
    else
        callback()
}

module.exports = {
    phrase,
    orderProductById,
    getAllProducts
};