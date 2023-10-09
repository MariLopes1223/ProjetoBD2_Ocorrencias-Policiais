"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector_1 = __importDefault(require("ol/layer/Vector"));
const Vector_2 = __importDefault(require("ol/source/Vector"));
const Feature_1 = __importDefault(require("ol/Feature"));
const Point_1 = __importDefault(require("ol/geom/Point"));
const proj_1 = require("ol/proj");
const style_1 = require("ol/style");
class Marker {
    constructor(map, path, coord) {
        this.setIcon(path);
        this.map = map;
        this.coordinates = coord;
        this.layer = this.create();
        this.map.addLayer(this.layer);
    }
    create() {
        return new Vector_1.default({
            source: new Vector_2.default(),
        });
    }
    add() {
        const marker = new Feature_1.default({
            geometry: new Point_1.default((0, proj_1.fromLonLat)(this.coordinates))
        });
        marker.setStyle(new style_1.Style({
            image: this.icon
        }));
        const markerSrc = this.layer.getSource();
        markerSrc === null || markerSrc === void 0 ? void 0 : markerSrc.addFeature(marker);
    }
    setIcon(path) {
        this.icon = new style_1.Icon({
            anchor: [0.5, 1],
            src: path,
            scale: 0.5,
        });
    }
    getPosition() {
        return this.coordinates;
    }
}
exports.default = Marker;
