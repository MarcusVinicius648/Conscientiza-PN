import express from 'express';

import ColetasController from './controllers/ColetasController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const coletasController = new ColetasController();
const itemsController = new ItemsController();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

routes.get('/items', itemsController.index);
routes.get('/coletas/:bairro', coletasController.show);

export default routes;