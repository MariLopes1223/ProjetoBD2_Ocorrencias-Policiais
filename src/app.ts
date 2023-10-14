import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import location_router from './routes/Ocorrencia.routes';
import { API_PORT } from './database/config';

const PORT = API_PORT;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use('/ocorrencias', location_router);

// app.get('/', (req: Request, res: Response)=>{
//     res.sendFile(path.join(__dirname, './public', 'index.html'));
// });

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});

export default PORT;