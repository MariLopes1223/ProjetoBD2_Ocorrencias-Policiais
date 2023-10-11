"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feature_1 = __importDefault(require("ol/Feature"));
const Point_1 = __importDefault(require("ol/geom/Point"));
const source_js_1 = require("ol/source.js");
const layer_js_1 = require("ol/layer.js");
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
        const markerFeature = new Feature_1.default({
            geometry: new Point_1.default((0, proj_1.fromLonLat)(this.coordinates)),
        });
        markerFeature.setStyle(new style_1.Style({
            image: this.icon
        }));
        const layer = new layer_js_1.Vector({
            source: new source_js_1.Vector({
                features: [markerFeature]
            }),
        });
        return layer;
    }
    // public add(): void{
    //     const marker = new Feature({
    //         geometry: new Point(fromLonLat(this.coordinates)),
    //     });
    //     marker.setStyle(
    //         new Style({
    //             image: this.icon
    //         }),
    //     );
    //     const markerSrc = this.layer.getSource();
    //     markerSrc?.addFeature(marker);
    // }
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
    remove() {
        this.map.removeLayer(this.layer);
    }
}
exports.default = Marker;
