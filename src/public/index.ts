/*
   LeaFlet usa o sistema [latitude, longitude] 
   PostgreSQL usa o sistema [longitude, latitude]
*/
import * as L from 'leaflet';
import { savePoint, getPoints, Point} from './Map.controller';

//ESTILIZANDO O MARCADOR
const customDefaultIcon = new L.Icon.Default({
  iconSize: [16, 22],
  iconAnchor: [10, 10],
  shadowAnchor: [15, 28]
});

L.Marker.prototype.options.icon = customDefaultIcon;

const map = L.map('map').setView([-6.89,-38.56], 15);
let markers: L.Marker[] = [];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

map.on('click', (evt) => {
  if(markers.length - 1 >= 0)
    markers[markers.length-1].remove()
  const coordinates = evt.latlng;
  console.log(evt.latlng);
  
  markers.push(L.marker(coordinates).addTo(map));
  
});

const form = document.querySelectorAll('input');
function getFormValues() {
    const obj: { [key: string]:string } = {};
  
    form.forEach((element) => {
      obj[element.id] = element.value;
    })

    return obj;
}

const infos = document.querySelector('#infos') as Element;
function showInfos(point: Point){
  infos.classList.add('visible');

  const titulo = document.querySelector('p#titulo') as Element;
  const tipo = document.querySelector('p#tipo') as Element;
  const data = document.querySelector('p#data') as Element;

  titulo.textContent = `Título: ${point.titulo}`;
  tipo.textContent = `Tipo: ${point.tipo}`;
  data.textContent = `Data: ${new Date(point.data).toLocaleString()}`;
}

function toLngLat(coordinates: L.LatLng){
  return [coordinates.lng, coordinates.lat];
}

function toLatLon(coordinates: number[]) {
  return { lat: coordinates[1], lng: coordinates[0] };
}

const btnRegister = document.querySelector('#register');
btnRegister?.addEventListener('click', (event)=>{
  const ocorrencia = getFormValues();
  
  savePoint(ocorrencia, toLngLat(markers[markers.length -1].getLatLng()));
});

function showPoints() {
  getPoints().then(pnts => {    
    for (const p of pnts) {
      const m = L.marker(toLatLon(p.geom.coordinates)).addTo(map);
      m.on('mouseover', () => {
        showInfos(p);
      });
      m.on('mouseout', () => {
        infos.classList.remove('visible');
      });
    }
  }).catch(err => {
    console.error(err);
  });
}
showPoints();