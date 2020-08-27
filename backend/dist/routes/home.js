"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const donors_1 = __importDefault(require("routes/donors"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Hello world");
});
router.use(donors_1.default);
exports.default = router;
//# sourceMappingURL=home.js.map