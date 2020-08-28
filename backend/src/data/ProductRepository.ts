import fs from 'fs';
console.log(process.cwd() + "/seed/products.json");

class ProductRepository {

    async getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(process.cwd() + "/seed/products.json", (err, data) => {
                data ?
                    resolve(JSON.parse(data.toString())) :
                    reject("Couldn't get products");
            });
        })
    }
}

export default ProductRepository;
