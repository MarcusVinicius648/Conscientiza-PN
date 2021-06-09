import { Request, Response } from 'express';
import knex from '../database/connection';

class ColetasController {

    async show (request: Request, response: Response){
        const { bairro } = request.params;
        const dia_semana = request.query.dia_semana;

        let coletas;

        if (dia_semana){
            coletas = await knex('coletas')
                .where('coletas.bairro', String(bairro))
                .where('coletas.dia_semana', Number(dia_semana))
                .select('coletas.*')
                .orderBy(['coletas.tipo', 'coletas.dia_semana', 'coletas.horario']);
        } else {
            coletas = await knex('coletas')
                .where('coletas.bairro', String(bairro))
                .select('coletas.*')
                .orderBy(['coletas.tipo', 'coletas.dia_semana', 'coletas.horario']);
        }  
        
        return response.json(coletas);        
    }
}

export default ColetasController;