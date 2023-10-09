import dotenv from 'dotenv';

dotenv.config();

const PG_HOST: string = process.env.PG_HOST || '';
const PG_USER: string = process.env.PG_USER || '';
const PG_PASSWORD: string = process.env.PG_PASSWORD || '';
const PG_DATABASE: string = process.env.PG_DATABASE || '';
const PG_PORT = process.env.PG_PORT;

export { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_USER, PG_PORT };