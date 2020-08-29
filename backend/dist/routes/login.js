"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRepository_1 = require("data/UserRepository");
const router = express_1.default.Router();
const userRepository = new UserRepository_1.UserRepository();
router.post("/api/login", async (req, res) => {
    if (userRepository.authenticate(req.body.username, req.body.password)) {
        res.cookie("session", "testsession");
        res.redirect("/");
    }
    else {
        res.send("invalid credentials");
    }
});
exports.default = router;
//# sourceMappingURL=login.js.map