const assert = require("assert");

describe("unit tests", () => {
    describe("nested describe", () => {
        it("should run a unit test", () => {
            assert.equal(1, 1);
        });
    });
});
