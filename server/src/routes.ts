import express from 'express';

import ColetasController from './controllers/ColetasController';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();

const coletasController = new ColetasController();
const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

routes.get('/items', itemsController.index);
routes.get('/coletas/:bairro', coletasController.show);
routes.get('/points',pointsController.index);
routes.get('/points/:id',pointsController.show)

export default routes;