import express from "express";
const router = express.Router();

router.get("/api/donors", (req, res) => {
    console.log("hit donors");
    res.send("donors page");
});

export default router;
