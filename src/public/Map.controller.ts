import Marker from "./assets/Marker";
import { inputData } from ".";
import { Point as ExportedPoint } from "ol/geom";
interface Point{
    id: number;
    titulo: string;
    tipo: string;
    data: Date;
    geom: any;
}

// TODO funcoes para pegar dados do formulario preenchido pelo usuario
async function savePoint(marker: Marker) {
    try {
        const point = {
            titulo: inputData.titulo.value,
            tipo: inputData.tipo.value,
            data: new Date(`${inputData.data.value}`), //data e hora deve ser dada pelo usuario
            geom: marker.getPosition()
        }
  
        const resp = await fetch('http://localhost:3000/ocorrencias', {
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

    } catch (error) {
        alert('ERROR: ' + error);
    }
}

async function getPoints(): Promise<Point[]> {
    try {
        const resp = await fetch('http://localhost:3000/ocorrencias', {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          },
        });

        if (!resp.ok) {
            throw new Error('ERROR IN REQUEST');
        }

        const locals = await resp.json();

        return locals as Point[];
    } catch (error) {
        alert('ERROR: ' + error);
        throw error;
    }
}

export { savePoint, getPoints };