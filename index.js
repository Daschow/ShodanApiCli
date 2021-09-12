const client = require('shodan-client');
const express = require('express');
const dotenv = require('dotenv').config().parsed;
const app = express();

app.listen(dotenv.PORT);

app.get('/shodanRequestsshPort', async (req, res) => {
  let result;
  try {
    result = await client.search('port:22', dotenv.API_KEY);
  } catch (error) {
    console.error(error);
  }
  res.send(result);
})

app.get('/shodanRequesthttpPort', async (req, res) => {
  let result;
  try {
    result = await client.search('port:80', dotenv.API_KEY);
  } catch (error) {
    console.error(error);
  }
  res.send(result);
})