"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("../controller/User.controller");
const router = express_1.default.Router();
// Create
router.post('/', User_controller_1.create);
// Read
router.get('/', User_controller_1.list);
router.get('/:email', User_controller_1.find);
// Update
router.put('/:email', User_controller_1.update);
// Delete
router.delete('/:email', User_controller_1.delete_user);
exports.default = router;
