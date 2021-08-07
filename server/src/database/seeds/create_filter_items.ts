import {Knex} from 'knex';
export async function seed(knex: Knex){
    await knex('items').insert([
        {title: 'Plástico'},
        {title: 'Papel'},
        {title: 'Óleo'},
        {title: 'Eletônico'},
        {title: 'Pilhas'},
    ]);
}