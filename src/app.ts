import 'reflect-metadata';
const express = require("express");
import createConnection from './database';
import router from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };