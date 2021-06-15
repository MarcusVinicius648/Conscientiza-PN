import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('coletas').insert([
        //Coleta tradicional
        
        //Segunda - Manhâ
        {tipo: 1, bairro: 'Fátima', dia_semana:1, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Novo Horizonte', dia_semana:1, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Progresso', dia_semana:1, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Massangano', dia_semana:1, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Bom Será', dia_semana:1, periodo: 'Manhã', horario:'07:00:00'},

        {tipo: 1, bairro: 'Pacheco', dia_semana:1, periodo: 'Manhã', horario:'07:30:00'},
        {tipo: 1, bairro: 'Vau Açu', dia_semana:1, periodo: 'Manhã', horario:'07:30:00'},

        {tipo: 1, bairro: 'Palmeirense', dia_semana:1, periodo: 'Manhã', horario:'08:30:00'},
        {tipo: 1, bairro: 'Esplanada', dia_semana:1, periodo: 'Manhã', horario:'08:30:00'},

        {tipo: 1, bairro: 'São Pedro', dia_semana:1, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Pachequinho', dia_semana:1, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'São Geraldo', dia_semana:1, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Sargaço', dia_semana:1, periodo: 'Manhã', horario:'09:00:00'},

        {tipo: 1, bairro: 'Pontal', dia_semana:1, periodo: 'Manhã', horario:'10:00:00'},

        //Segunda - Tarde
        {tipo: 1, bairro: 'Dalvo de Oliveira Bemfeito', dia_semana:1, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Vila Alvarenga', dia_semana:1, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Rosário', dia_semana:1, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Alto da Boa Vista', dia_semana:1, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Santa Teresa', dia_semana:1, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Cidade Nova', dia_semana:1, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Bom Pastor', dia_semana:1, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Primeiro de Maio', dia_semana:1, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Sumaré', dia_semana:1, periodo: 'Tarde', horario:'14:00:00'},

        {tipo: 1, bairro: 'Copacabana', dia_semana:1, periodo: 'Tarde', horario:'15:00:00'},
        {tipo: 1, bairro: 'Nova Copacabana', dia_semana:1, periodo: 'Tarde', horario:'15:00:00'},

        {tipo: 1, bairro: 'Almeida Triângulo Verde', dia_semana:1, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'São Judas Tadeu', dia_semana:1, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Triângulo Novo', dia_semana:1, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Palmeiras', dia_semana:1, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Santo Antônio', dia_semana:1, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Guarapiranga', dia_semana:1, periodo: 'Tarde', horario:'19:00:00'},

        {tipo: 1, bairro: 'Triângulo Velho', dia_semana:1, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centenário', dia_semana:1, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Santa Teresinha', dia_semana:1, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centro', dia_semana:1, periodo: 'Tarde', horario:'20:00:00'},

        //Terça - Manhã
        {tipo: 1, bairro: 'Vila Oliveira', dia_semana:2, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Vale Suíço', dia_semana:2, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Progresso', dia_semana:2, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Nova Almeida', dia_semana:2, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Mosqueira', dia_semana:2, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Bom Viver', dia_semana:2, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Polivalente', dia_semana:2, periodo: 'Manhã', horario:'07:30:00'},

        {tipo: 1, bairro: 'Paraíso', dia_semana:2, periodo: 'Manhã', horario:'08:00:00'},

        {tipo: 1, bairro: 'Vale do Ypê', dia_semana:2, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Fortaleza', dia_semana:2, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Resende', dia_semana:2, periodo: 'Manhã', horario:'09:00:00'},

        //Terça - Tarde
        {tipo: 1, bairro: 'Ribeirão', dia_semana:2, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Antarville', dia_semana:2, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Passa Tempo', dia_semana:2, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Vale do Sereno', dia_semana:2, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Vale Verde', dia_semana:2, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Ana Florência', dia_semana:2, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Rasa', dia_semana:2, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Chácara da Flores', dia_semana:2, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'São Judas Tadeu', dia_semana:2, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Triângulo Novo', dia_semana:2, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Palmeiras', dia_semana:2, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Santo Antônio', dia_semana:2, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Guarapiranga', dia_semana:2, periodo: 'Tarde', horario:'19:00:00'},

        {tipo: 1, bairro: 'Triângulo Velho', dia_semana:2, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centenário', dia_semana:2, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Santa Teresinha', dia_semana:2, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centro', dia_semana:2, periodo: 'Tarde', horario:'20:00:00'},

        //Quarta - Manhã
        {tipo: 1, bairro: 'Fátima', dia_semana:3, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Novo Horizonte', dia_semana:3, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Progresso', dia_semana:3, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Massangano', dia_semana:3, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Bom Será', dia_semana:3, periodo: 'Manhã', horario:'07:00:00'},

        {tipo: 1, bairro: 'Pacheco', dia_semana:3, periodo: 'Manhã', horario:'07:30:00'},
        {tipo: 1, bairro: 'Vau Açu', dia_semana:3, periodo: 'Manhã', horario:'07:30:00'},

        {tipo: 1, bairro: 'Palmeirense', dia_semana:3, periodo: 'Manhã', horario:'08:30:00'},
        {tipo: 1, bairro: 'Esplanada', dia_semana:3, periodo: 'Manhã', horario:'08:30:00'},

        {tipo: 1, bairro: 'São Pedro', dia_semana:3, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Pachequinho', dia_semana:3, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'São Geraldo', dia_semana:3, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Sargaço', dia_semana:3, periodo: 'Manhã', horario:'09:00:00'},

        {tipo: 1, bairro: 'Pontal', dia_semana:3, periodo: 'Manhã', horario:'10:00:00'},

        //Quarta - Tarde
        {tipo: 1, bairro: 'Dalvo de Oliveira Bemfeito', dia_semana:3, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Vila Alvarenga', dia_semana:3, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Rosário', dia_semana:3, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Alto da Boa Vista', dia_semana:3, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Santa Teresa', dia_semana:3, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Cidade Nova', dia_semana:3, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Bom Pastor', dia_semana:3, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Primeiro de Maio', dia_semana:3, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Sumaré', dia_semana:3, periodo: 'Tarde', horario:'14:00:00'},

        {tipo: 1, bairro: 'Copacabana', dia_semana:3, periodo: 'Tarde', horario:'15:00:00'},
        {tipo: 1, bairro: 'Nova Copacabana', dia_semana:3, periodo: 'Tarde', horario:'15:00:00'},

        {tipo: 1, bairro: 'Almeida Triângulo Verde', dia_semana:3, periodo: 'Tarde', horario:'18:00:00'},
        
        {tipo: 1, bairro: 'São Judas Tadeu', dia_semana:3, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Triângulo Novo', dia_semana:3, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Palmeiras', dia_semana:3, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Santo Antônio', dia_semana:3, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Guarapiranga', dia_semana:3, periodo: 'Tarde', horario:'19:00:00'},

        {tipo: 1, bairro: 'Triângulo Velho', dia_semana:3, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centenário', dia_semana:3, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Santa Teresinha', dia_semana:3, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centro', dia_semana:3, periodo: 'Tarde', horario:'20:00:00'},
        
        //Quinta - Manhã
        {tipo: 1, bairro: 'Vila Oliveira', dia_semana:4, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Vale Suíço', dia_semana:4, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Progresso', dia_semana:4, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Nova Almeida', dia_semana:4, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Mosqueira', dia_semana:4, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Bom Viver', dia_semana:4, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Polivalente', dia_semana:4, periodo: 'Manhã', horario:'07:30:00'},

        {tipo: 1, bairro: 'Paraíso', dia_semana:4, periodo: 'Manhã', horario:'08:00:00'},

        {tipo: 1, bairro: 'Vale do Ypê', dia_semana:4, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Fortaleza', dia_semana:4, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Resende', dia_semana:4, periodo: 'Manhã', horario:'09:00:00'},

        //Quinta - Tarde
        {tipo: 1, bairro: 'Ribeirão', dia_semana:4, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Antarville', dia_semana:4, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Passa Tempo', dia_semana:4, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Vale Verde', dia_semana:4, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Ana Florência', dia_semana:4, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Rasa', dia_semana:4, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Chácara da Flores', dia_semana:4, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'São Judas Tadeu', dia_semana:4, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Triângulo Novo', dia_semana:4, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Palmeiras', dia_semana:4, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Santo Antônio', dia_semana:4, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Guarapiranga', dia_semana:4, periodo: 'Tarde', horario:'19:00:00'},

        {tipo: 1, bairro: 'Triângulo Velho', dia_semana:4, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centenário', dia_semana:4, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Santa Teresinha', dia_semana:4, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centro', dia_semana:4, periodo: 'Tarde', horario:'20:00:00'},

        //Sexta - Manhã
        {tipo: 1, bairro: 'Fátima', dia_semana:5, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Novo Horizonte', dia_semana:5, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Progresso', dia_semana:5, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Massangano', dia_semana:5, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Bom Será', dia_semana:5, periodo: 'Manhã', horario:'07:00:00'},

        {tipo: 1, bairro: 'Pacheco', dia_semana:5, periodo: 'Manhã', horario:'07:30:00'},
        {tipo: 1, bairro: 'Vau Açu', dia_semana:5, periodo: 'Manhã', horario:'07:30:00'},

        {tipo: 1, bairro: 'Palmeirense', dia_semana:5, periodo: 'Manhã', horario:'08:30:00'},
        {tipo: 1, bairro: 'Esplanada', dia_semana:5, periodo: 'Manhã', horario:'08:30:00'},

        {tipo: 1, bairro: 'São Pedro', dia_semana:5, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Pachequinho', dia_semana:5, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'São Geraldo', dia_semana:5, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Sargaço', dia_semana:5, periodo: 'Manhã', horario:'09:00:00'},

        {tipo: 1, bairro: 'Pontal', dia_semana:5, periodo: 'Manhã', horario:'10:00:00'},

        //Sexta - Tarde
        {tipo: 1, bairro: 'Dalvo de Oliveira Bemfeito', dia_semana:5, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Vila Alvarenga', dia_semana:5, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Rosário', dia_semana:5, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Alto da Boa Vista', dia_semana:5, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Santa Teresa', dia_semana:5, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Cidade Nova', dia_semana:5, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Bom Pastor', dia_semana:5, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Primeiro de Maio', dia_semana:5, periodo: 'Tarde', horario:'14:00:00'},
        {tipo: 1, bairro: 'Sumaré', dia_semana:5, periodo: 'Tarde', horario:'14:00:00'},

        {tipo: 1, bairro: 'Copacabana', dia_semana:5, periodo: 'Tarde', horario:'15:00:00'},
        {tipo: 1, bairro: 'Nova Copacabana', dia_semana:5, periodo: 'Tarde', horario:'15:00:00'},

        {tipo: 1, bairro: 'Almeida Triângulo Verde', dia_semana:5, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'São Judas Tadeu', dia_semana:5, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Triângulo Novo', dia_semana:5, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Palmeiras', dia_semana:5, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Santo Antônio', dia_semana:5, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Guarapiranga', dia_semana:5, periodo: 'Tarde', horario:'19:00:00'},

        {tipo: 1, bairro: 'Triângulo Velho', dia_semana:5, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centenário', dia_semana:5, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Santa Teresinha', dia_semana:5, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centro', dia_semana:5, periodo: 'Tarde', horario:'20:00:00'},

        //Sábado - Manhã
        {tipo: 1, bairro: 'Vila Oliveira', dia_semana:6, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Vale Suíço', dia_semana:6, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Progresso', dia_semana:6, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Nova Almeida', dia_semana:6, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Mosqueira', dia_semana:6, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Bom Viver', dia_semana:6, periodo: 'Manhã', horario:'07:00:00'},
        {tipo: 1, bairro: 'Polivalente', dia_semana:6, periodo: 'Manhã', horario:'07:30:00'},

        {tipo: 1, bairro: 'Paraíso', dia_semana:6, periodo: 'Manhã', horario:'08:00:00'},

        {tipo: 1, bairro: 'Vale do Ypê', dia_semana:6, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Fortaleza', dia_semana:6, periodo: 'Manhã', horario:'09:00:00'},
        {tipo: 1, bairro: 'Resende', dia_semana:6, periodo: 'Manhã', horario:'09:00:00'},

        //Sábado - Tarde
        {tipo: 1, bairro: 'Vale do Sereno', dia_semana:6, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Vale Verde', dia_semana:6, periodo: 'Tarde', horario:'13:00:00'},
        {tipo: 1, bairro: 'Ana Florência', dia_semana:6, periodo: 'Tarde', horario:'13:00:00'},

        {tipo: 1, bairro: 'Rasa', dia_semana:6, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Chácara da Flores', dia_semana:6, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'São Judas Tadeu', dia_semana:6, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Triângulo Novo', dia_semana:6, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Palmeiras', dia_semana:6, periodo: 'Tarde', horario:'18:00:00'},
        {tipo: 1, bairro: 'Santo Antônio', dia_semana:6, periodo: 'Tarde', horario:'18:00:00'},

        {tipo: 1, bairro: 'Guarapiranga', dia_semana:6, periodo: 'Tarde', horario:'19:00:00'},

        {tipo: 1, bairro: 'Triângulo Velho', dia_semana:6, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centenário', dia_semana:6, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Santa Teresinha', dia_semana:6, periodo: 'Tarde', horario:'20:00:00'},
        {tipo: 1, bairro: 'Centro', dia_semana:6, periodo: 'Tarde', horario:'20:00:00'},

    
        // Coleta Seletiva
        
        // Segunda-feira - Manhã
        { tipo: 2, bairro: 'Nova Almeida', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Vila Oliveira', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Antarville', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Vale Verde', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Polivalente', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Mosqueira', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Bom Viver', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Paraíso', dia_semana: 1, periodo: 'Manhã', horario: '07:00:00' },

        // Segunda-feira - Tarde
        { tipo: 2, bairro: 'Santo Antônio', dia_semana: 1, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Vale do Ypê', dia_semana: 1, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Fortaleza', dia_semana: 1, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Rasa', dia_semana: 1, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Chácara das Flores', dia_semana: 1, periodo: 'Tarde', horario: '11:00:00' },

        // Terça-feira - Manhã
        { tipo: 2, bairro: 'Pacheco', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Progresso', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Vale Suíço', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'São Geraldo', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Pachequinho', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Esplanada', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Dalvo Bemfeito', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Vila Alvarenga', dia_semana: 2, periodo: 'Manhã', horario: '07:00:00' },

        // Terça-feira - Terde
        { tipo: 2, bairro: 'Santa Teresa', dia_semana: 2, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Primeiro de Maio', dia_semana: 2, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Rosário', dia_semana: 2, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Sumaré', dia_semana: 2, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Copacabana', dia_semana: 2, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Nova Copacabana', dia_semana: 2, periodo: 'Tarde', horario: '11:00:00' },

        // Quinta-feira - Manhã
        { tipo: 2, bairro: 'Alto da Boa Vista', dia_semana: 4, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Fátima', dia_semana: 4, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Novo Horizonte', dia_semana: 4, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Palmeirense', dia_semana: 4, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'São Pedro', dia_semana: 4, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Cidade Nova', dia_semana: 4, periodo: 'Manhã', horario: '07:00:00' },
        { tipo: 2, bairro: 'Bom Pastor', dia_semana: 4, periodo: 'Manhã', horario: '07:00:00' },

        // Quinta-feira - Tarde
        { tipo: 2, bairro: 'Triângulo Velho', dia_semana: 4, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Triângulo Novo', dia_semana: 4, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'São Judas Tadeu', dia_semana: 4, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Alameda Triângulo', dia_semana: 4, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Verde', dia_semana: 4, periodo: 'Tarde', horario: '11:00:00' },
        { tipo: 2, bairro: 'Vila Centenário', dia_semana: 4, periodo: 'Tarde', horario: '11:00:00' },
    ]);
}