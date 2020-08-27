"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const home_1 = __importDefault(require("routes/home"));
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
app.use(home_1.default);
app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});
exports.default = app;
//# sourceMappingURL=index.js.map