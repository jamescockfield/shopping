import express from "express";
import { FavouriteRepository } from 'data/FavouriteRepository';

const router = express.Router();
const favouriteRepository = new FavouriteRepository();

router.post("/api/favourite", async (req, res) => {

    if (favouriteRepository.setFavourite(req.body.guid, req.body.favourite)) {

        res.send("success")
    } else {

        res.send("failed");
    }
});

export default router;
