"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_user = exports.update = exports.find = exports.list = exports.create = void 0;
const express_1 = require("express");
const User_1 = __importDefault(require("../model/User"));
//CREATE
function create( /* req: Request, res: Response */) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = User_1.default.build(express_1.request.body);
        try {
            yield user.save();
            express_1.response.status(201).send('saved');
        }
        catch (error) {
            express_1.response.status(400).send('failed');
        }
    });
}
exports.create = create;
//READ
function list( /* req: Request, res: Response */) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield User_1.default.findAll();
        express_1.response.status(200).send(users);
    });
}
exports.list = list;
function find( /* req: Request, res: Response */) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = express_1.request.params.email;
        const user = yield User_1.default.findByPk(key);
        if (user === null) {
            express_1.response.status(404).send('NOT FOUND');
        }
        else {
            express_1.response.status(200).send(user);
        }
    });
}
exports.find = find;
// Update
function update( /* req: Request, res: Response */) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = express_1.request.params.email;
        const name = express_1.request.body.nome;
        try {
            yield User_1.default.update({
                nome: name
            }, {
                where: {
                    email: key
                }
            });
            express_1.response.send('MODIFIED');
        }
        catch (err) {
            express_1.response.send('ERRO AO MODIFICAR: ' + err);
        }
    });
}
exports.update = update;
// Delete
function delete_user( /* req: Request, res: Response */) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = express_1.request.params.email;
        const user = yield User_1.default.findByPk(key);
        if (user === null) {
            express_1.response.status(404).send('NOT FOUND');
        }
        else {
            try {
                yield user.destroy();
                express_1.response.status(200).send('DELETED');
            }
            catch (err) {
                express_1.response.status(400).send('ERRO AO EXCLUIR: ' + err);
            }
        }
    });
}
exports.delete_user = delete_user;
