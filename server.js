// Main starting point of the app
const express = require('express');
const fetch = require('node-fetch');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

// Middlewares
app.use(cors()); // Disables CORS
app.use(morgan('combined')); // Logging framework, used for debugging
app.use(bodyParser.json({ type: '*/*' })); // parses incoming requests into json
//           http://athmapi.westus.cloudapp.azure.com/athm/requestSession?commUsername=evertec&commPassword=evertec
const API = 'http://athmapi.westus.cloudapp.azure.com/athm';
const requestSession = API + '/requestSession';
const requestPayment = API + '/requestPayment';
const verifyPaymentStatus = API + '/verifyPaymentStatus';
const authParams = 'commUsername=evertec&commPassword=evertec';
app.get(
  '/', (req, res) => {
    res.send('asdfsad');
  }
);

// Makes API request to verify the user
app.post(
  '/auth', (req, res) => {
    const url = requestSession + '?' + authParams;
    fetch(url).then(
      data => {
        return data.json();
      }
    ).then(
      json => {
        res.send(json);
      }
    )
  }
);

// send API request to request payment
app.get(
  '/auth', (req, res) => {
    const url = requestPayment + '?' + authParams;
    fetch(url).then(
      data => {
        return data.json();
      }
    ).then(
      json => {
        res.send(json);
      }
    )
  }
);


// Server Setup
const port = process.env.PORT || 3090;

// Creates an http server and forward it to the express app
const server = http.createServer(app);

// Listen to the port that we created
server.listen(port);
console.log('Server listening on port' + port);