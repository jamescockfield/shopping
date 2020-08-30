import fs from "fs";
import mongoose from "mongoose";
import faker from "faker";
import Product from "data/Product";
import { User } from "data/User";
import products from "seed/products.json";

function seedUsers() {

    return new Promise(resolve => {

        const userCreations = [];
        for (let i = 0; i < 10; i++) {

            userCreations.push(User.create({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                address: {
                    streetAddress: faker.address.streetAddress(),
                    city: faker.address.city(),
                    zipCode: faker.address.zipCode()
                }
            }));
        }

        Promise.all(userCreations).then(() => {

            User.updateOne({}, {
                email: "a@a.com",
                password: "password"
            }).then(resolve);
        });
    });
}

function seedProducts() {

    return new Promise(resolve => {

        const productCreations = [];

        for (const product of products) {
            productCreations.push(Product.create(product));
        }

        Promise.all(productCreations).then(resolve);
    });
}

function seed() {
    return new Promise(resolve => {
        Promise.all([
            mongoose.connection.dropDatabase(),
            seedUsers(),
            seedProducts()
        ]).then(() => {
            console.log("Seeding successful!");
            resolve();
        });
    });
}

export default seed;
