import express from "express";
import dotenv from "dotenv";
import routes from "routes/routes";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

mongoose.connect('mongodb://localhost/shopping');
const connection = mongoose.connection;
connection.on("error", err => console.error(err));
// connection.once("open", () => app.db = connection.db);

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});

export default app;
