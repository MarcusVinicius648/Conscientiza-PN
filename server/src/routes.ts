import express from 'express';

import ColetasController from './controllers/ColetasController';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';
import OcorrenciasController from './controllers/OcorrenciasController';

const routes = express.Router();

const coletasController = new ColetasController();
const itemsController = new ItemsController();
const pointsController = new PointsController();
const ocorrenciasController = new OcorrenciasController();

routes.get('/items', itemsController.index);
routes.get('/coletas/:bairro', coletasController.show);
routes.get('/points',pointsController.index);
routes.get('/points/:id',pointsController.show)
routes.post('/ocorrencias', ocorrenciasController.create)

export default routes;