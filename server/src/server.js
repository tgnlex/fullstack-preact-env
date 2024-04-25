import express from 'express';
import {createServer} from 'http/createServer';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));