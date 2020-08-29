import express from "express";
import products from "routes/products";
import login from "routes/login";
import favourites from "routes/favourites";

const router = express.Router();

router.get("/api", (req, res) => {
    console.log("hit on /api");
    res.send("Hello world");
});

router.use(products);
router.use(login);
router.use(favourites);

export default router;
