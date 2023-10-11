import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import Marker from './assets/Marker';
import { savePoint, getPoints} from './Map.controller';
import { Overlay } from 'ol';
const icon = './assets/point.svg';

const btnRegister = document.querySelector('#register');
const markers:Marker[] = [];

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
  if(markers.length - 1 >= 0)
    markers[markers.length-1].remove()
  const coordinates = toLonLat(event.coordinate);
  const marker = new Marker(map, icon, coordinates);
  markers.push(marker);
});

const titulo = document.querySelector('#titulo') as HTMLInputElement
const tipo = document.querySelector('#tipo') as HTMLInputElement
const data = document.querySelector('#data') as HTMLInputElement
export const inputData = { titulo, tipo, data }

btnRegister?.addEventListener('click', ()=>{
  const marker = markers[markers.length-1];
  markers.pop()
  savePoint(marker);
  map.changed()
});

function showPoints() {
  
  getPoints().then( pnts => {
    for (const p of pnts) {
      const marker = new Marker(map, icon, p.geom.coordinates);
    }
  }).catch(err => {
    console.error(err);
  });
}

showPoints();



export {map, markers as locals};