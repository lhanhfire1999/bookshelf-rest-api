import {json} from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import {createContext} from './init';
import {route,router} from './route';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(json());


http.createServer(app).listen(port, () => {
  console.log('Start server at port ' + port);
});
const ctx = createContext();
route(app, ctx);

app.use(router);
