import express from "express";
import donors from "routes/donors";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello world");
});

router.use(donors);

export default router;
