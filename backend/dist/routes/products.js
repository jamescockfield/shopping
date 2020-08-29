"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_1 = __importDefault(require("data/Product"));
const router = express_1.default.Router();
router.get("/api/products", async (req, res) => {
    res.send(await Product_1.default.find());
});
exports.default = router;
//# sourceMappingURL=products.js.map