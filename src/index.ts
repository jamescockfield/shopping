import express from "express";
import dotenv from "dotenv";
import routes from "src/routes/donors";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(routes);

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});

export default app;
