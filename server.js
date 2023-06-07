import agent from '@sixthsense/sixthsense-node-js';
// agent.start({
//    serviceName: 'eComm-Angular-Backend',
//    directServers: 'grpc-collector-observability.sixthsense.rakuten.com:443',
//    collectorAddress: 'grpc-collector-observability.sixthsense.rakuten.com:443',
//    enableLogs: true,
//    caPath: true,
//    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiI5OTlkYTc0Ny04NmIyLTRkOTItYTRjNy0yYzZiNjkwMzM4ZGMiLCJiaWxsaW5nX2lkIjoiNWI2MDhhNWItMjZkZC00MGE5LWEwMjgtYjIwMzFmZTRiOWM5IiwiaWF0IjoxNjc0NjQ0Njg4LCJhdWQiOiJvYXAiLCJpc3MiOiJzaXh0aC1zZW5zLWF1dGgifQ.2UXHNnSIgY4-jECvyeNlATUpxNMA5RX9WfDLSdCoegY'
// });
const tracer = require('dd-trace').init()
import bodyParser from 'body-parser';
import express from 'express';
import pino from 'pino';
import expPino from 'express-pino-logger';
import sleep from 'system-sleep';
import cors from 'cors';


const logger = pino({
  level: 'info',
  prettyPrint: false,
  useLevelLabels: true,
});
const expLogger = expPino({
  logger: logger,
});


const app = express();

app.use(expLogger);
const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

};

app.use(cors(corsOpts));
app.use((req, res, next) => {
  res.set('Timing-Allow-Origin', '*');
  res.set('Access-Control-Allow-Origin', '*');
  next();
});


app.post('/api/v1/user/fail', (req, res) => {
  res.status(500).send('Working');
});

// fire it up!
const port = process.env.USER_SERVER_PORT || '8080';
app.listen(port, () => {
  logger.info('Started on port', port);
});
