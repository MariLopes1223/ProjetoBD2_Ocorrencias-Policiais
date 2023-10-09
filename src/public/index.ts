import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import Marker from './assets/Marker';
import { savePoint, getPoints} from './Map.controller';

const icon = './assets/point.svg';

const btnRegister = document.querySelector('#register');
const locals:Marker[] = [];

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: fromLonLat([-38.56, -6.89]),
    zoom: 15,
  }),
});

map.on('click', function (event) {
  const coordinates = toLonLat(event.coordinate);

  // const lat = coordinates[1];
  // const lng = coordinates[0];

  const marker = new Marker(map, icon, coordinates);
  marker.add();
  locals.push(marker);
});

btnRegister?.addEventListener('click', ()=>{
  // console.log(locals[locals.length - 1]);
  const marker = locals[locals.length-1];

  savePoint(marker);
});

function showPoints() {
  getPoints().then( pnts => {
    for (const p of pnts) {
      const marker = new Marker(map, icon, p.geom.coordinates);
      marker.add();
    }
  }).catch(err => {
    console.error(err);
  });
}

showPoints();

export {map, locals};