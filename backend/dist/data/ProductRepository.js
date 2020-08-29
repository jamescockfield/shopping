"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({});
class ProductRepository {
    async getAll() {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile(process.cwd() + "/seed/products.json", (err, data) => {
                data ?
                    resolve(JSON.parse(data.toString())) :
                    reject("Couldn't get products");
            });
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map