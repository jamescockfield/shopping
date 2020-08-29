"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const faker_1 = __importDefault(require("faker"));
const Product_1 = __importDefault(require("data/Product"));
const User_1 = __importDefault(require("data/User"));
const products_json_1 = __importDefault(require("seed/products.json"));
function seedUsers() {
    return new Promise(resolve => {
        const userCreations = [];
        for (let i = 0; i < 10; i++) {
            userCreations.push(User_1.default.create({
                firstName: faker_1.default.name.firstName(),
                lastName: faker_1.default.name.lastName(),
                email: faker_1.default.internet.email(),
                password: faker_1.default.internet.password(),
                address: {
                    streetAddress: faker_1.default.address.streetAddress(),
                    city: faker_1.default.address.city(),
                    zipCode: faker_1.default.address.zipCode()
                }
            }));
        }
        Promise.all(userCreations).then(() => {
            User_1.default.updateOne({}, {
                email: "a@a.com",
                password: "password"
            }).then(resolve);
        });
    });
}
function seedProducts() {
    return new Promise(resolve => {
        const productCreations = [];
        for (const product of products_json_1.default) {
            productCreations.push(Product_1.default.create(product));
        }
        Promise.all(productCreations).then(resolve);
    });
}
function seed() {
    return new Promise(resolve => {
        Promise.all([
            mongoose_1.default.connection.dropDatabase(),
            seedUsers(),
            seedProducts()
        ]).then(() => {
            console.log("Seeding successful!");
            resolve();
        });
    });
}
exports.default = seed;
//# sourceMappingURL=seed.js.map