import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import connectMongo from "connect-mongo";
import passport from "passport";
import routes from "routes/routes";
import { Connection } from "mongoose";
import { passportConfig } from "passportConfig";


const createApp = (mongooseConnection: Connection) => {

    dotenv.config();
    passportConfig(passport);

    const app = express();
    const MongoStore = connectMongo(session);
    const sessionSecret = process.env.SESSION_SECRET;

    if (!sessionSecret) throw new Error("SESSION_SECRET environment variable not set");

    app.use(express.json());
    app.use(session({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection })
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(routes);

    return app;
}

export default createApp;
