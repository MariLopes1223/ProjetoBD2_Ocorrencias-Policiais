import Ocorrencias from '../model/Ocorrencias';
import { Request, Response } from 'express';
import Maker from '../public/assets/Marker';
import { map } from '../public/index';

const icon = '../public/assets/point.svg';

//CREATE
async function create(req: Request, res: Response) {
    const titulo = req.body.titulo;
    const tipo = req.body.tipo;
    const data = req.body.data
    const geom = req.body.geom;

    try {
        await Ocorrencias.create(
            {
                titulo: titulo,
                tipo: tipo,
                data: data,
                geom: {
                    type: 'Point',
                    coordinates: geom
                }
            }
        );
        res.send('saved');
    } catch (error) {
        res.send('failed');
    }
}

//READ
async function list(req: Request, res: Response) {
    const locations = await Ocorrencias.findAll();

    res.send(locations);
}

async function find(req: Request, res: Response) {
    const key = req.params.id;

    const local = await Ocorrencias.findByPk(key);

    if (local === null) {
        res.status(404).send('NOT FOUND');
    } else {
        res.status(200).send(local);
    }
}

export { create, list, find };