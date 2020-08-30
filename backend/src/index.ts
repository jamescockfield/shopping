import express from "express";
import dotenv from "dotenv";
import routes from "routes/routes";
import mongoose from "mongoose";
import seed from "seed/seed";
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongo";
import { passportConfig } from "passportConfig";

dotenv.config();
passportConfig(passport);

const app = express();
const MongoStore = connectMongo(session);
const port = process.env.SERVER_PORT;
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) throw new Error("SESSION_SECRET environment variable not set");

mongoose.connect('mongodb://localhost/shopping',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        if (process.argv.slice(2).includes("seed")) {

            seed().then(() => process.exit());
        } else {

            app.use(express.json());
            app.use(session({
                secret: sessionSecret,
                resave: false,
                saveUninitialized: false,
                store: new MongoStore({ mongooseConnection: mongoose.connection })
            }));
            app.use(passport.initialize());
            app.use(passport.session());
            app.use(routes);

            app.listen(port, () => {
                console.log("Server started at http://localhost:" + port);
            });
        }
    })
    .catch(error => console.error(error));

// for (const t of Object.keys(mongoose.Schema.Types)) {
    // mongoose.Schema.Types[t].set('required', true);
// }
