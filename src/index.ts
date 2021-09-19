
import express from 'express';
import dotenv from 'dotenv';
import { fetchFromShodan } from './utils/utils';

const privateEnv = dotenv.config().parsed;
const app = express();
app.listen(privateEnv.PORT);



app.get('/shodanRequestsshPort', async (req, res) => {
  await fetchFromShodan(res,22,"sshResultFile.json");
})

app.get('/shodanRequesthttpPort', async (req, res) => {
  await fetchFromShodan(res,22,"sshResultFile.json");
})