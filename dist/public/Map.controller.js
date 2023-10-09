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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoints = exports.savePoint = void 0;
let increment = 0;
function savePoint(marker) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const point = {
                name: `local ${increment += 1}`,
                coordinates: marker.getPosition()
            };
            const resp = yield fetch('http://localhost:3000/location', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(point)
            });
            if (!resp.ok) {
                throw new Error('ERROR IN REQUEST');
            }
            alert('SUCESS');
        }
        catch (error) {
            alert('ERROR: ' + error);
        }
    });
}
exports.savePoint = savePoint;
function getPoints() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield fetch('http://localhost:3000/location', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },
            });
            if (!resp.ok) {
                throw new Error('ERROR IN REQUEST');
            }
            const locals = yield resp.json();
            return locals;
        }
        catch (error) {
            alert('ERROR: ' + error);
            throw error;
        }
    });
}
exports.getPoints = getPoints;
