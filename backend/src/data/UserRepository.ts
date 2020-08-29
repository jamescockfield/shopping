import fs from 'fs';

const userSeed = require(process.cwd() + "/seed/userSeed.js");
const users = userSeed();

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: {
        streetAddress: string,
        city: string,
        zipCode: string
    },
    dateCreated: Date,
    dateModified: Date,
    dateDeleted?: Date
}

export class UserRepository {

    #users: User[];

    constructor() {
        this.#users =  userSeed();
    }

    authenticate(username: string, password: string) {

        const matchingUsers = this.#users.filter(user =>
            user.email === username && user.password === password
        )
        return matchingUsers.length;
    }
}
