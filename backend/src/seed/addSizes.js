let fs = require("fs");

let data = fs.readFileSync(`./products.json`);
let products = JSON.parse(data);
let sizes = ["S","M","1XL","XXL","4XL","3XL","L","XL","XS"];

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// products.map(product => {
    // let n = getRandomInt(4);
    // sizes = shuffle(sizes);
    // let productSizes = [];
    // for (i = 0; i < n; i++) {
        // productSizes.push(sizes[i]);
    // }
    // console.log(productSizes);
    // product.sizes = productSizes;
    // return product;
// });

products = shuffle(products);

fs.writeFileSync(`./products_finished.json`, JSON.stringify(products));
