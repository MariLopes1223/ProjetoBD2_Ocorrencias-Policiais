import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
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
        return new VectorLayer({
        source: new VectorSource(),
        });
    }

    public add(): void{
        const marker = new Feature({
            geometry: new Point(fromLonLat(this.coordinates))
        });

        marker.setStyle(
            new Style({
                image: this.icon
            }),
        );

        const markerSrc = this.layer.getSource();
        markerSrc?.addFeature(marker);
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
}

export default Marker;