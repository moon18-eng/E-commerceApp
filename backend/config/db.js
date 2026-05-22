import {neon} from '@neondatabase/serverless'
import dotenv from 'dotenv'

dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;


//this creates a SQL connectionunsing our env variables
//this SQL function we exported is used as tagged template literaal, which allows us to write SQL queries safely
export const sql = neon(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
); 
