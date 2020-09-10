import { testRouter } from './routes/test/test-router';
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '15mb', extended: false }));
app.use(bodyParser.json({ limit: '15mb' }));

app.use(testRouter);
app.get('*', (req: Request, res: Response) => res.send('Not Found'));

module.exports = app;
