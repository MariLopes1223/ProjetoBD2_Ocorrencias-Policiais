"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Location_controller_1 = require("../controller/Location.controller");
const location_router = express_1.default.Router();
//CREATE
location_router.post('/', Location_controller_1.create);
//READ
location_router.get('/', Location_controller_1.list);
location_router.get('/:name', Location_controller_1.find);
exports.default = location_router;
