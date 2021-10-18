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

    async show(request:Request, response:Response){
        const ocorrencias = await knex('ocorrencias').select('*');

        const serializedOcorrencias = ocorrencias.map(ocorrencia =>{
            return{
                id:ocorrencia.id,
                latitude: ocorrencia.latitude,
                longitude: ocorrencia.longitude,
            };
        });
        return response.json(serializedOcorrencias);
    }

};
export default OcorrenciasController;