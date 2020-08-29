"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const seed_1 = __importDefault(require("seed/seed"));
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
mongoose_1.default.connect('mongodb://localhost/shopping', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
    if (process.argv.slice(2).includes("seed")) {
        seed_1.default().then(() => process.exit());
    }
    else {
        app.listen(port, () => {
            console.log("Server started at http://localhost:" + port);
        });
    }
})
    .catch(error => console.error(error));
// for (const t of Object.keys(mongoose.Schema.Types)) {
// mongoose.Schema.Types[t].set('required', true);
// }
app.use(express_1.default.json());
app.use(routes_1.default);
//# sourceMappingURL=index.js.map