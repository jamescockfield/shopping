import express from "express";
import products from "routes/products";

const router = express.Router();

router.get("/api", (req, res) => {
    console.log("hit on /api");
    res.send("Hello world");
});

router.use(products);

export default router;
