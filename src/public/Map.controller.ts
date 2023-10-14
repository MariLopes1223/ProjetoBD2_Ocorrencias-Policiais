interface Point {
  titulo: string;
  tipo: string;
  data: Date;
  geom: any;
}

async function savePoint(infos: any, coordinates: number[]) {
  try {
    const point: Point = {
      ...infos,
      geom: coordinates
    }

    console.log(point);
    
    const resp = await fetch(`http://localhost:3000/ocorrencias`, {
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
    const resp = await fetch(`http://localhost:3000/ocorrencias`, {
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

export { savePoint, getPoints, Point };