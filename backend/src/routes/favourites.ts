import express from "express";
import passport from "passport";
import Favourite from "data/Favourite";
import Product from "data/Product";
import { Error as MongooseError } from "mongoose";
import { authenticated } from "passportConfig";

const router = express.Router();

router.post("/api/favourite", async (req, res) => {
    try {

        const product = await Product.findOne({ guid: req.body.guid });
        if (!product) throw new MongooseError.DocumentNotFoundError("product not found");

        const set = req.body.favourite ? "$addToSet" : "$pull";
        await Favourite.updateOne({ userId: req.user }, {
            [set]: {
                favourites: product._id
            }
        }, { upsert: true });

        res.sendStatus(200);

    } catch (err) {

        console.error(err);
        res.sendStatus(500);
    }
});

router.get("/api/favourites",
    passport.authenticate("local", { failureRedirect: "/login" }),
    async (req, res) => {

        try {

            const favourite = await Favourite.findOne({ userId: req.user });
            if (!favourite) throw new MongooseError.DocumentNotFoundError("favourite not found");

            const products = await Product.find({ _id: {
                $in: favourite.favourites
            }});

            res.send(products);
        } catch (err) {

            console.error(err);
            res.sendStatus(500);
        }
});

export default router;
