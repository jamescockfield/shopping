import express from "express";
import { User } from "data/User";
import passport from "passport";

const router = express.Router();

router.post("/api/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), (req, res) => {
    res.cookie("loggedIn", true);
    res.redirect("/");
});

router.get("/api/logout", (req, res) => {
    req.logout();
    res.clearCookie("loggedIn");
    res.redirect("/");
});

export default router;
