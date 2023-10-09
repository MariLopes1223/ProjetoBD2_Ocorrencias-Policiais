"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PG_PORT = exports.PG_USER = exports.PG_PASSWORD = exports.PG_HOST = exports.PG_DATABASE = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PG_HOST = process.env.PG_HOST || '';
exports.PG_HOST = PG_HOST;
const PG_USER = process.env.PG_USER || '';
exports.PG_USER = PG_USER;
const PG_PASSWORD = process.env.PG_PASSWORD || '';
exports.PG_PASSWORD = PG_PASSWORD;
const PG_DATABASE = process.env.PG_DATABASE || '';
exports.PG_DATABASE = PG_DATABASE;
const PG_PORT = process.env.PG_PORT;
exports.PG_PORT = PG_PORT;
