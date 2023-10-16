import Ocorrencia from '../model/Ocorrencia';
import { Request, Response } from 'express';
// import Maker from '../public/assets/Marker';

// const icon = '../public/assets/point.svg';

//CREATE
async function create(req: Request, res: Response) {
  try {
    await Ocorrencia.create(
      {
        titulo: req.body.titulo,
        tipo: req.body.tipo,
        data: new Date(req.body.data),
        geom: {
          type: 'Point',
          coordinates: req.body.geom
        }
      }
    );
    res.status(201).send('saved');
  } catch (error) {
    console.log(error);
    res.status(400).send('failed');
  }
}

//READ
async function list(req: Request, res: Response) {
  const ocorrencias = await Ocorrencia.findAll();

  res.send(ocorrencias);
}

async function find(req: Request, res: Response) {
  const key = req.params.email;

  const local = await Ocorrencia.findByPk(key);

  if (local === null) {
    res.status(404).send('NOT FOUND');
  } else {
    res.status(200).send(local);
  }
}

export { create, list, find };