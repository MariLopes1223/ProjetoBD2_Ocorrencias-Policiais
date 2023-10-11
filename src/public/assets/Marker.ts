import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import { Vector as VectorSource} from 'ol/source.js';
import { Vector as VectorLayer} from 'ol/layer.js';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';


class Marker {
    private coordinates!: number[];
    private icon!: Icon;
    private map: Map;
    private layer: VectorLayer<VectorSource<Point>>;

    constructor(map: Map, path: string, coord: number[]) {
        this.setIcon(path);
        this.map = map;
        this.coordinates = coord;
        this.layer = this.create();
        this.map.addLayer(this.layer);
    }


    private create(): VectorLayer<VectorSource<Point>> {
        const markerFeature = new Feature({
            geometry: new Point(fromLonLat(this.coordinates)),
        })
        markerFeature.setStyle(
            new Style({
                image: this.icon
            }),
        )
        const layer =  new VectorLayer({
            source: new VectorSource({
                features: [ markerFeature ]
            }),
        })
        return layer
    }
    
    private setIcon(path: string) {
        this.icon = new Icon({
            anchor: [0.5, 1],
            src: path,
            scale: 0.5,
        });
    }

    public getPosition(): number[] {
        return this.coordinates;
    }

    public remove(){
        this.map.removeLayer(this.layer)
    }
}

export default Marker;