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
app.get(
  '/', (req, res) => {
    res.send('asdfsad');
  }
);

// Makes API request to verify the user
// We need the phone number, username, password, ammount
app.get(
  '/auth', (req, res) => {
    const queryString = 'commUsername=evertec&commPassword=evertec';
    const url = requestSession + '?' + queryString;
    const amount = 300.25;
    const phoneNumber = 7873455434;
    fetch(url).then(
      data => {
        return data.json();
      }
    ).then(
      json => {
        json.amount = amount;
        json.phoneNumber = phoneNumber;
        res.send(json);
      }
    )
  }
);

// Makes API request to make the transaction
app.get(
  '/auth', (req, res) => {
    const token = '';
    const phone = '';
    const amount = '';
    const queryString = 'token=' + token + 'phone=' + phone + 'amount=' + amount;
    const url = requestPayment + '?' + queryString;
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

// Makes API request to verify payment
app.get(
  '/auth', (req, res) => {
    const token = '';
    const referenceNumber = '';
    const queryString = 'token=' + token + 'referenceNumber=' + referenceNumber;
    const url = requestPayment + '?' + queryString;
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