import express from "express";
import ProductRepository from 'data/ProductRepository';
const router = express.Router();
const productRepository = new ProductRepository();

router.get("/api/products", async (req, res) => {
    res.send(await productRepository.getAll());
});

export default router;
