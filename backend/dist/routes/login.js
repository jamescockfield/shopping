"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("data/User"));
const router = express_1.default.Router();
router.post("/api/login", async (req, res) => {
    const result = await User_1.default.findOne({
        email: req.body.username,
        password: req.body.password
    });
    console.log("RES: " + result);
    if (result) {
        res.cookie("session", "testsession");
        res.redirect("/");
    }
    else {
        res.send("invalid credentials");
    }
});
exports.default = router;
//# sourceMappingURL=login.js.map