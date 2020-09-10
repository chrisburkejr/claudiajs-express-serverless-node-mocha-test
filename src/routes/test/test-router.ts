const { Router } = require('express');
import { Request, Response } from 'express';

export const testRouter = Router().get('/test', (req: Request, res: Response) => {
    res.send('Hello');
});
