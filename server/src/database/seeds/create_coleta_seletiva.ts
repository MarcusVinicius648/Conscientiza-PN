import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('coletas').insert([
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