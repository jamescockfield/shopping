"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("routes/products"));
const login_1 = __importDefault(require("routes/login"));
const favourites_1 = __importDefault(require("routes/favourites"));
const router = express_1.default.Router();
router.get("/api", (req, res) => {
    console.log("hit on /api");
    res.send("Hello world");
});
router.use(products_1.default);
router.use(login_1.default);
router.use(favourites_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map