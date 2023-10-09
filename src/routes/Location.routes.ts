import express, {Request, Response} from 'express';
import { create, list, find } from '../controller/Location.controller';

const location_router = express.Router();

//CREATE
location_router.post('/', create);

//READ
location_router.get('/', list);

location_router.get('/:name', find);

export default location_router;