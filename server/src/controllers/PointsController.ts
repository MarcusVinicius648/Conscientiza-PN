import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController{
    async index(request:Request, response:Response){
        const {items} = request.query;
        
        const parsedItems = String(items).split(',').map(item =>Number(item.trim()));
        
        const points = await knex('points')
        .join('points_items', 'points.id', '=', 'points_items.points_id')
        .whereIn('points_items.items_id',parsedItems)
        .distinct()
        .select('points.*');
        
        const serializedPoints = points.map( (point) =>{
            return{
                ...points
            };
        });
        
        return response.json(points)
    }

    async show(request:Request, response:Response){
        const {id} = request.params;
        
        const point = await knex('points').where('id', id).first();
        if(!point){
            return response.status(400).json({message: 'Point not found.'});
        }
        const serializedPoints ={
            ...point
        }
        return response.json(serializedPoints)
    }
}
export default PointsController;