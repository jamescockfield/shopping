import express from "express";
import { User } from "data/User";
import passport from "passport";

const router = express.Router();

router.get("/api/auth",
    passport.authenticate(["local", "anonymous"]),
    (req, res) =>
        req.user ? res.send(true) : res.send(false)
);
router.post("/api/login", 
    passport.authenticate("local"),
    (req, res) => res.redirect("/")
);

router.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

export default router;
