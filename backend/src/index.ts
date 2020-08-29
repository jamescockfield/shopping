import express from "express";
import dotenv from "dotenv";
import routes from "routes/routes";
import mongoose from "mongoose";
import seed from "seed/seed";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

mongoose.connect('mongodb://localhost/shopping',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        if (process.argv.slice(2).includes("seed")) {
            seed().then(() => process.exit());
        } else {
            app.listen(port, () => {
                console.log("Server started at http://localhost:" + port);
            });
        }
    })
    .catch(error => console.error(error));

// for (const t of Object.keys(mongoose.Schema.Types)) {
    // mongoose.Schema.Types[t].set('required', true);
// }

app.use(express.json());
app.use(routes);
