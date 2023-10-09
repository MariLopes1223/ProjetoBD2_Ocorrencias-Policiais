import express, { Request, Response } from 'express';
import cors from 'cors';

import { PG_PORT } from './database/config';
import location_router from './routes/Location.routes';

const PORT = PG_PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/location', location_router);

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});