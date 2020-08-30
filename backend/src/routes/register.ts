import express from "express";
import { User } from "data/User";
import passport from "passport";

const router = express.Router();

router.post("/api/register", async (req, res) => {

    res.send("register");
});

export default router;
