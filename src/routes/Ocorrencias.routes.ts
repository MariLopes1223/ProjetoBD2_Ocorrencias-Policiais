import express from 'express';
import { create, list, find } from '../controller/Ocorrencias.controller';

const router = express.Router();

//CREATE
router.post('/', create);

//READ
router.get('/', list);

router.get('/:id', find);

export default router;