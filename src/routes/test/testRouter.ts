const { Router } = require('express');
export const testRouter = Router();

testRouter.get('/test', (req: any, res: any) => {
    res.send('Hello');
});