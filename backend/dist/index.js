"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
mongoose_1.default.connect('mongodb://localhost/shopping');
const connection = mongoose_1.default.connection;
connection.on("error", err => console.error(err));
// connection.once("open", () => app.db = connection.db);
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});
exports.default = app;
//# sourceMappingURL=index.js.map