import Marker from "./assets/Marker";

interface Point{
    id: number;
    titulo: string;
    tipo: string;
    data: Date;
    geom: any;
}

let increment = 0;

// TODO funcoes para pegar dados do formulario preenchido pelo usuario
async function savePoint(marker: Marker) {
    try {
        const point = {
            titulo: `TODO titulo dado pelo usuario ${increment+=1}`,
            tipo: `TODO tipo de ocorrencia dado pelo usuario`,
            data: new Date(), //data deve ser dada pelo usuario
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