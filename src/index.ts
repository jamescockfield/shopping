import express from "express";
import dotenv from "dotenv";
import home from "routes/home";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(home);

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});

export default app;
