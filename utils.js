let fs = require('fs')


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

module.exports = {
    orderProductById
};