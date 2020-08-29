import express from "express";
import User from "data/User";

const router = express.Router();

router.post("/api/login", async (req, res) => {

    const result = await User.findOne({
        email: req.body.username,
        password: req.body.password
    });

    console.log("RES: " + result);
    if (result) {
        res.cookie("session", "testsession");
        res.redirect("/");
    } else {
        res.send("invalid credentials");
    }
});

export default router;
