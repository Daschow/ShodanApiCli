
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { register } from './bin/routes';

dotenv.config();
const app = express();

app.use(helmet());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${process.env.PORT}`);
});

register(app);