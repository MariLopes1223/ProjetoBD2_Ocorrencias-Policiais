"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./database/config");
const Location_routes_1 = __importDefault(require("./routes/Location.routes"));
const PORT = config_1.PG_PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/location', Location_routes_1.default);
app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});
