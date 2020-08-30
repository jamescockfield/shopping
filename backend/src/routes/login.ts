import express from "express";
import { User } from "data/User";
import passport from "passport";

const router = express.Router();

router.get("/api/auth",
    passport.authenticate(["local", "anonymous"]),
    (req, res) => 
        req.user ? res.send(true) : res.send(false)
);
router.post("/api/login", passport.authenticate("local", {
    // failureRedirect: "/login",
    // failureFlash: "Invalid login",
    // successFlash: "Login success!"
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
