"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FavouriteRepository_1 = require("data/FavouriteRepository");
const router = express_1.default.Router();
const favouriteRepository = new FavouriteRepository_1.FavouriteRepository();
router.post("/api/favourite", async (req, res) => {
    if (favouriteRepository.setFavourite(req.body.guid, req.body.favourite)) {
        res.send("success");
    }
    else {
        res.send("failed");
    }
});
exports.default = router;
//# sourceMappingURL=favourites.js.map