const faker = require("faker");

let users = [];

for (let i = 0; i < 10; i++) {

    let date = faker.date.past();
    users.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        address: {
            streetAddess: faker.address.streetAddress(),
            address: faker.address.city(),
            zipCode: faker.address.zipCode()
        },
        dateCreated: date,
        dateModified: date,
        dateDeleted: null
    });
}

users[0].email = "a@a.com";
users[0].password = "password";

console.log(users);
