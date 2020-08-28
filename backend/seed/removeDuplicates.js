let fs = require("fs");

let name = "products";
let data = fs.readFileSync(`./${name}.json`);
let products = JSON.parse(data);
//
// let result = [];

// products.forEach(product => {
    // let resultContains = false;
    // result.forEach(r => {
        // if (product.name == r.name) {
            // resultContains = true;
        // }
    // });
//
    // if (!resultContains) {
        // result.push(product);
    // }
// });

products.map(product => {
    if (product.originalPrice) {
        product.price = product.originalPrice;
    }
    delete product.originalPrice;
    return product;
});

fs.writeFileSync(`./${name}_finished.json`, JSON.stringify(products));

console.log(products.length);
// console.log(result.length);
