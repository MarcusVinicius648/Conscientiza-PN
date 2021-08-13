import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController{
    async index(request:Request, response:Response){
        const {items} = request.query;
        
        const parsedItems = String(items).split(',').map(item =>Number(item.trim()));
        
        //O PROBLEMA ESTÁ NESTE FILTRO E NO AUTOINCREMENTE DA TABELA(TEM QUE FAZER O COMANDO PARA REINICIAR O AUTOINCREMENTE)
        const points = await knex('points')
        .whereIn('points.items',parsedItems)
        .distinct()
        .select('points.*');

        console.log(points)

        const serializedPoints = points.map( point =>{
            return{
                ...point
            };
        });
        return response.json(serializedPoints)
    }

    async show(request:Request, response:Response){
        const {id} = request.params;

        const points = await knex('points').where('id', id).first();

        if(!points){
            return response.status(400).json({message: 'Point not found.'});
        }
        
        const serializedPoints ={
            ...points 
        }

        const items = await knex('items')
        .join('points_items', 'items.id', '=', 'poinst_items.items_id')
        .where('points_items.points_id', id)
        .select('items.title');

        return response.json({points: serializedPoints, items})
    }

}
export default PointsController;