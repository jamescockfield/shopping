import express from "express";
import Product from 'data/Product';

const router = express.Router();

router.get("/api/products", async (req, res) => {
    res.send(await Product.find());
});

export default router;
