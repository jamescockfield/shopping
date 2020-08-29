import express from "express";
import { UserRepository } from 'data/UserRepository';

const router = express.Router();
const userRepository = new UserRepository();

router.post("/api/login", async (req, res) => {

    if (userRepository.authenticate(req.body.username, req.body.password)) {

        res.cookie("session", "testsession");
        res.redirect("/");
    } else {

        res.send("invalid credentials");
    }
});

export default router;
