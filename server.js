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
// Makes API request to verify the user
// We need the phone number, username, password, amount
app.post(
  '/auth', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const amount = req.body.amount;
    const phone = req.body.phone;
    const queryString = 'commUsername=' + username + '&commPassword=' + password;
    const url = requestSession + '?' + queryString;
    fetch(url).then(
      data => {
        return data.json();
      }
    ).then(
      json => {
        json.amount = amount;
        json.phone = phone;
        res.send(json);
      }
    )
  }
);

// Makes API request to make the transaction
app.post(
  '/confirm', (req, res) => {
    const token = req.body.token;
    const amount = req.body.amount;
    const phone = req.body.phone;
    const queryString = 'token=' + token + '&phone=' + phone + '&amount=' + amount;
    const url = requestPayment + '?' + queryString;
    fetch(url).then(
      data => {
        return data.json();
      }
    ).then(
      json => {
        // Token was sent on the first request.
        const responseStatus = json.responseStatus; // use to verify
        const referenceNumber = json.referenceNumber;
        const status = json.status; // use to verify
        const newQueryString = 'token=' + token + '&referenceNumber=' + referenceNumber;
        const newUrl = verifyPaymentStatus + '?' + newQueryString;
        fetch(newUrl).then(
          response => {
            return response.json();
          }
        ).then(
          json => {
            return res.send(json);
          }
        );
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