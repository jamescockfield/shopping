import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello world");
});

router.get("/donors", (req, res) => {
    res.send("donors page");
});

export default router;
