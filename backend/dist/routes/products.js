"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductRepository_1 = __importDefault(require("data/ProductRepository"));
const router = express_1.default.Router();
const productRepository = new ProductRepository_1.default();
router.get("/api/products", async (req, res) => {
    res.send(await productRepository.getAll());
});
exports.default = router;
//# sourceMappingURL=products.js.map