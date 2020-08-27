import express from "express";
import donors from "routes/donors";

const router = express.Router();

router.get("/api", (req, res) => {
    console.log("hit");
    res.send("Hello world");
});

router.use(donors);

export default router;
