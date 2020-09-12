import expect from "expect";

describe("unit tests", () => {
    describe("nested describe", () => {
        it("should run an unit test", () => {
            expect(1).toBe(1);
        });
    });
});
