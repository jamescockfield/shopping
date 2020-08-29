"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Favourite_1 = __importDefault(require("data/Favourite"));
const router = express_1.default.Router();
router.post("/api/favourite", async (req, res) => {
    if (Favourite_1.default.update({
        userGuid: req.body.userGuid,
        productGuid: req.body.guid,
        favourite: req.body.favourite
    }, { upsert: true })) {
        res.send("success");
    }
    else {
        res.send("failed");
    }
});
exports.default = router;
//# sourceMappingURL=favourites.js.map