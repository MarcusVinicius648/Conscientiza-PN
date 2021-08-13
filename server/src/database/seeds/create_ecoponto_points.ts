import {Knex} from 'knex';

export async function seed(knex:Knex) {
    await knex('points').insert([
        {
            image: 'falsa',
            name: 'atac',
            email:'galinha@hotmail.com',
            whatsapp: '988777766',
            latitude:-20.4046901,
            longitude:-42.9012992,
            rua: 'João Alves',
            numberAddress: 345,
            bairro: 'Triangulo',
            city: 'Ponte',
            uf: 'MG',
            horarioFuncionamentoInicio: '07:30:00',
            horarioFuncionamentoFim: '18:00:00',
            abreDomingo: true,
            items: [26, 28],
        },
    ]);
}