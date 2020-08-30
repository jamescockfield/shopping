const assert = require("assert");

describe("integration tests", () => {
    describe("nested describe", () => {
        it("should run an integration test", () => {
            assert.equal(1, 1);
        });
    });
});
