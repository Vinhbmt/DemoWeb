import 'reflect-metadata';
import express from 'express';
import  bodyParser from 'body-parser';
import {InversifyExpressServer} from 'inversify-express-utils';
import * as inversify from 'inversify';
import cors from './middlewares/cors'
import {Container} from "inversify"
import {container} from './container'
import './inversify-config'


import './controllers/ScriptController'

//dotenv
require('dotenv').config();

//connectDB
const { connectDB }=require('./config/db')
connectDB();


// const app: express.Application = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// let server = new InversifyExpressServer(container as inversify.interfaces.Container, app);
// server.setConfig((appArgument) => {
//   appArgument.use(
//     bodyParser.urlencoded({
//       extended: false,
//     }),
//   );
//   appArgument.use(bodyParser.json());
// });

// export default server.build();

const server = new InversifyExpressServer(container)
server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );
  app.use(bodyParser.json());
});
let app = server.build();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`reportService server is running on port ${PORT}...`);
});
