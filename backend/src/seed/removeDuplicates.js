let fs = require("fs");
let uuid = require("uuid").v4;

let data = fs.readFileSync(`./products.json`);
let products = JSON.parse(data);

products.map(product => {
    product.price = parseFloat(product.price.replace(",", "."));
    product.salePrice = product.salePrice && parseFloat(product.salePrice.replace(",", "."));
    return product;
});

fs.writeFileSync(`./products_finished.json`, JSON.stringify(products));

console.log(products.length);
// console.log(result.length);
