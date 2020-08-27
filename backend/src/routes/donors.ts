import express from "express";
const router = express.Router();

router.get("/donors", (req, res) => {
    res.send("donors page");
});

export default router;
