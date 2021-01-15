import express, { Express } from 'express';

import { expressLogger } from './common/logging/Logger';
import NormalRouterServer from './NormalRouterServer';

// import mongoose from 'mongoose'
import cors from 'cors';

const app: Express = express();
const port: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(expressLogger); // Log all requests

const server = new NormalRouterServer();
server.start(port);
