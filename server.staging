var agent = require('@sixthsense/sixthsense-node-js').default;
agent.start({
   serviceName: 'eComm-Angular-Backend',
   directServers: 'stg-grpc-collector-observability.sixthsense.rakuten.com:443',
   collectorAddress: 'stg-grpc-collector-observability.sixthsense.rakuten.com:443',
   enableLogs: true,
   caPath: true,
   authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiIxOGZhMDJmMS1iNjc1LTQ1MmQtYjllYy0yN2ZhYzdlZWM5MzUiLCJiaWxsaW5nX2lkIjoiYjVjNjVkMDgtMTVhYi00NDkwLTliZDMtM2FiZDc3ODZkN2YxIiwiaWF0IjoxNjIwMzY2NDgyLCJhdWQiOiJvYXAiLCJpc3MiOiJzaXh0aC1zZW5zLWF1dGgifQ.5U4Tlh8Abf25Wa-SJaf4KQHnNz8C-S35hG7ZG5PIHo8'
});
const bodyParser = require('body-parser');
const express = require('express');
const pino = require('pino');
const expPino = require('express-pino-logger');
const sleep = require('system-sleep');
const cors = require('cors');


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
