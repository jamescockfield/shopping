import express from "express";
import Product from 'data/Product';
import Favourite from 'data/Favourite';
import { Error as MongooseError } from "mongoose";
import passport from "passport";

const router = express.Router();

// passport.authenticate("local", function (err: string, user: any) {
    // console.log("authenticate: ", user);
    // req.logIn(user, loginErr => next(loginErr));
// })(req, res, next);

router.get("/api/products",
    async (req, res) => {

        try {
            let products;
            if (req.user) {

                const favourite = await Favourite.findOne({ userId: req.user });
                const favourites = favourite && favourite.favourites ? favourite.favourites : [];

                products = await Product.aggregate([{
                    $addFields: {
                        favourite: {
                            $in: ["$_id", favourites]
                        }
                    }
                }])
            } else {
                products = await Product.find();
            }
            res.send(products);
        } catch (err) {
            console.error(err);
        }
});

export default router;
