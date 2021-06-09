import { Knex } from 'knex';

/* 
    tipo
        1 - Tradicional
        2 - Seletiva
        3 - Volumosos

    dia_semana
        0 - Domingo
        1 - Segunda-Feira
        2 - Terça-Feira
        3 - Quarta-Feira
        4 - Quinta-Feira
        5 - Sexta-Feira
        6 - Sábado    
*/

export async function up(knex: Knex){
    return knex.schema.createTable('coletas', table => {
        table.increments('codigo').primary();
        table.integer('tipo').notNullable();
        table.string('bairro').notNullable();
        table.integer('dia_semana').notNullable();
        table.string('periodo').notNullable();
        table.time('horario').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('coletas');
}