import { Express } from "express";
import createApp from "app";
import mongoose, { Connection } from "mongoose";
import chai from "chai";
import chaiHttp from "chai-http";
import expect from "expect";

chai.use(chaiHttp);

interface requestOptions {
    callback?: (res: ChaiHttp.Response) => Promise<void>,
    cookie: string
}

interface responseOptions {
    responseText?: string,
    status?: number,
    redirect?: string
}

interface loginOptions extends requestOptions {
    email?: string,
    password?: string,
};

export const getTestRunner = async (seed: () => Promise<void>) => {
    await mongoose.connect("mongodb://localhost/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await mongoose.connection.dropDatabase();
    await seed();

    return new TestRunner(mongoose.connection);
};

export class TestRunner {

    #app?: Express;
    
    constructor(connection: Connection) {
        this.#app = createApp(connection);
    }

    request() {
        return chai.request(this.#app);
    }


    async close() {
        await mongoose.connection.close();
    };

    async clearSessions() {
        if (await mongoose.connection.db.listCollections({name: "sessions"}).next()) {
            await mongoose.connection.db.dropCollection("sessions");
        }
    }

    // Chai-http request and response types don't allow us to access all of their properties
    // This is a hack to allow logging them for debugging
    objectLogger<T extends ChaiHttp.Response | Chai.ChaiHttpRequest>(object: T) {

        let avoid = [
            "req",
            "res",
            "request",
            "response",
            "socket"
        ];

        for (let key of Object.keys(object)) {
            if (!avoid.includes(key)) {
                console.log(key);
                console.log(object[key as keyof T]);
            }
        }
    }

    async loginRequest(options: loginOptions & responseOptions) {
        let res = await chai.request(this.#app)
            .post("/api/login")
            .redirects(0)
            .send({
                email: options.email || "a@a.com",
                password: options.password || "password"
            });

        options.status && expect(res.status).toBe(options.status);
        options.status === 302 && expect(res.header.location).toBe("/");

        options.callback && await options.callback(res);
    };

    async authRequest(options: requestOptions & responseOptions) {

        let request = chai.request(this.#app).get("/api/auth");
        options.cookie && request.set("Cookie", options.cookie);

        let res = await request;
        expect(res.status).toBe(200);
        expect(res.text).toBe(options.responseText);

        options.callback && await options.callback(res);
    }
}
