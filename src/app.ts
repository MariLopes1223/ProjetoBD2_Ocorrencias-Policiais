import express from 'express';
import cors from 'cors';

import { PG_PORT } from './database/config';
import router from './routes/Ocorrencias.routes';

const PORT = PG_PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/ocorrencias', router);

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});