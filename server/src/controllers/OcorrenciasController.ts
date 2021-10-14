import { Response, Request } from "express";
import knex from "../database/connection";

class OcorrenciasController{

    async create(request:Request, response: Response) {
        const {
            descricao,
            foto,
            latitude,
            longitude,
            reportacoes,
            nomeUsuario
        } = request.body

        await knex('ocorrencias').insert({
            descricao,
            foto,
            latitude,
            longitude,
            reportacoes,
            nomeUsuario
        });
        
        return response.json({sucess:true})
    }

};
export default OcorrenciasController;