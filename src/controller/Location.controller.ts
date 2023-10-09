import Location from '../model/Location';
import { Request, Response } from 'express';
import Maker from '../public/assets/Marker';
import { map } from '../public/index';

const icon = '../public/assets/point.svg';

//CREATE
async function create(req: Request, res: Response) {
    const nome = req.body.name;
    const coord = req.body.coordinates;

    try {
        await Location.create(
            {
                name: nome,
                geom: {
                    type: 'Point',
                    coordinates: coord
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
    const locations = await Location.findAll();

    res.send(locations);
}

async function find(req: Request, res: Response) {
    const key = req.params.email;

    const local = await Location.findByPk(key);

    if (local === null) {
        res.status(404).send('NOT FOUND');
    } else {
        res.status(200).send(local);
    }
}

export { create, list, find };