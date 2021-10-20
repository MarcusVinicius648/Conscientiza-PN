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
            nomeUsuario,
            bairro,
            rua
        } = request.body

        await knex('ocorrencias').insert({
            descricao,
            foto,
            latitude,
            longitude,
            reportacoes,
            nomeUsuario,
            bairro,
            rua
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
                descricao:ocorrencia.descricao,
                foto:ocorrencia.foto,
                reportacoes:ocorrencia.reportacoes,
                nomeUsuario:ocorrencia.nomeUsuario,
                bairro:ocorrencia.bairro,
                rua:ocorrencia.rua
            };
        });
        return response.json(serializedOcorrencias);
    }

    async showId(request:Request, response:Response){
        const {id} = request.params;
        
        const ocorrencia = await knex('ocorrencias').where('id', id).first();
        if(!ocorrencia){
            return response.status(400).json({message: 'Point not found.'});
        }
        const serializedOcorrencias ={
            ...ocorrencia
        }
        return response.json(serializedOcorrencias)
    }

};
export default OcorrenciasController;