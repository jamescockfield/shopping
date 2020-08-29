"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const ProductSchema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    imageSrc: String,
    price: String,
    sizes: [String],
    salePrice: String
}, { timestamps: true });
ProductSchema.plugin(mongoose_delete_1.default, { deletedAt: true });
const Product = mongoose_1.default.model('Product', ProductSchema);
exports.default = Product;
//# sourceMappingURL=Product.js.map