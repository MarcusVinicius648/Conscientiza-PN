import express from 'express';

import ColetasController from './controllers/ColetasController';

const routes = express.Router();

const coletasController = new ColetasController();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

routes.get('/coletas/:bairro', coletasController.show);

export default routes;