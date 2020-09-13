import expect from "expect";
import { User } from "data/User";
import { getTestRunner, TestRunner } from "test/TestRunner";

describe("Authentication / authorization tests", () => {

    let testRunner: TestRunner;

    before(async () => {
        testRunner = await getTestRunner(async () => {
            await User.create({
                firstName: "firstname",
                lastName: "lastName",
                email: "a@a.com",
                password: "password",
                address: {
                    streetAddress: "streetAddress",
                    city: "city",
                    zipCode: "zipCode"
                }
            });
        });
    });

    beforeEach(async () => testRunner.clearSessions());

    describe("/api/login tests", () => {
        
        it("should fail GETs on the login endpoint", async () => {
            let res = await testRunner.request().get("/api/login");
            expect(res.status).toBe(404);
        });

        it("should respond to invalid login details with unauthorized", async () => testRunner.loginRequest({
            email: "invalidemail",
            status: 401
        }));

        it("should respond found to correct login and redirect home", async () => testRunner.loginRequest({ status: 302 }));
    });

    describe("/api/auth/ tests", () => {

        it("should return false when the user is anonymous", async () => testRunner.authRequest({ responseText: "false" }));

        it("should still return false after a failed login", async () => testRunner.loginRequest({
            password: "invalidpassword",
            callback: async () => testRunner.authRequest({ responseText: "false" })
        }));

        it("should return true after a successful login", async () => testRunner.loginRequest({
            status: 302,
            callback: async res => testRunner.authRequest({ 
                responseText: "true",
                cookie: res.header["set-cookie"][0]
            })
        }));
    });

    after(async () => testRunner.close());
});
