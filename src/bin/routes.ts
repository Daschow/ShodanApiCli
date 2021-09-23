import * as express from 'express';
import { fetchFromShodan } from '../utils/utils';

export const register = ( app: express.Application ) => {
    app.get('/shodanRequestsshPort', async (req, res) => {
        await fetchFromShodan(res,22,"sshResultFile.json");
    });

    app.get('/shodanRequesthttpPort', async (req, res) => {
        await fetchFromShodan(res,22,"sshResultFile.json");
    });

    app.use((req, res) => {
        res.status(404).send({ url: req.originalUrl + ' not found' })
    });
}