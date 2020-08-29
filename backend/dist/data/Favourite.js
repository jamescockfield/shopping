"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const FavouriteSchema = new mongoose_1.default.Schema({
    userId: Number,
    productId: Number,
    favourite: Boolean,
}, { timestamps: true });
FavouriteSchema.plugin(mongoose_delete_1.default, { deletedAt: true });
const Favourite = mongoose_1.default.model('Favourite', FavouriteSchema);
exports.default = Favourite;
//# sourceMappingURL=Favourite.js.map