import 'reflect-metadata';
const express = require("express");
import './database';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Server is run'))