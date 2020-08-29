import express from "express";
import Favourite from 'data/Favourite';

const router = express.Router();

router.post("/api/favourite", async (req, res) => {

    if (Favourite.update({
        userGuid: req.body.userGuid,
        productGuid: req.body.guid,
        favourite: req.body.favourite
    }, { upsert: true })) {

        res.send("success")
    } else {

        res.send("failed");
    }
});

export default router;
