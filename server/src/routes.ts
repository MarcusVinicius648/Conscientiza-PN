import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';
//import Post from './models/Post';

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
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/ocorrencias', ocorrenciasController.create);
routes.get('/ocorrencias', ocorrenciasController.show);
routes.get('/ocorrencias/:id', ocorrenciasController.showId);

/* Implementação das rotas de upload das imagens */
/*routes.get("/posts", async (request, response) => {
    const posts = await Post.find();
    return response.json(posts);
});*/

routes.post("/upload", multer(multerConfig).single("file"), async (request, response) => {
    const name = request.file?.originalname;
    const size = request.file?.size;
    const key = request.file?.filename;
    const url = request.file?.path;

    /*const post = await Post.create({
        name,
        size,
        key,
        url
    });*/

    return response.json(request.file);
});

/* routes.delete("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    await post.remove();
    return res.send();
}); */

export default routes;