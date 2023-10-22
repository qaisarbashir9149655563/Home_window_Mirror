"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// api/app.ts
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = validateEnv_1.default.PORT || 8000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Middleware
// Routes
app.use("/api", routes_1.default);
// Start the server
// Connect to MongoDB
mongoose_1.default
    .connect(validateEnv_1.default.MONGO_CONNECTION_STRING)
    .then(() => {
    console.log("Mongo connected");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch((err) => {
    console.log(err);
});
