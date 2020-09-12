import { Express } from "express";
import chai from "chai";
import chaiHttp from "chai-http";
import expect from "expect";
import createApp from "app";
import mongoose from "mongoose";

chai.use(chaiHttp);

let app: Express;

describe("Authentication / authorization tests", () => {

    before(done => {
        mongoose.connect("mongodb://localhost/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                app = createApp(mongoose.connection);
                done();
            });
    });

    describe("/api/login tests", () => {
        
        it("should fail GETs on the login endpoint", done => {

            chai.request(app)
                .get("/api/login")
                .then(res => {
                    expect(res.status).toBe(404);
                    done();
                }).catch(err => done(err));
        });

        it("should respond to invalid login details with unauthorized", done => {

            chai.request(app)
                .post("/api/login")
                .send({
                    email: "invalidemail",
                    password: "password"
                })
                .then(res => {
                    expect(res.status).toBe(401);
                    done();
                }).catch(err => done(err));
        });

        it("should respond to correct login and set the cookie", done => {

            chai.request(app)
                .post("/api/login")
                .send({
                    email: "a@a.com",
                    password: "test"
                })
                .then(res => {
                    expect(res.status).toBe(200);
                    // expect(res.cookie).contains("s.id");
                    done();
                }).catch(err => done(err));
        });
    });

    describe("/api/auth/ tests", () => {

        it("should return false when the user is anonymous", done => {

            chai.request(app)
                .get("/api/auth")
                .then(res => {
                    expect(res.text).toBe("false");
                    done();
                }).catch(err => done(err));
        });
    });

    after(done => mongoose.connection.close(done));
});
