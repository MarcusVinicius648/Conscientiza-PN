import {Knex} from 'knex';
export async function seed(knex: Knex){
    await knex('items').insert([
        {id:1, title: 'Plástico'},
        {id:2, title: 'Papel'},
        {id:3, title: 'Óleo'},
        {id:4, title: 'Eletônico'},
        {id:5, title: 'Pilhas'},
    ]);
}