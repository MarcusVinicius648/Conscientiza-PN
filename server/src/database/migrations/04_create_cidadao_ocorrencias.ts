import {Knex} from 'knex';
export async function up(knex:Knex){
    return knex.schema.createTable('ocorrencias', table =>{
        table.increments('id').primary();
        table.string('descricao').notNullable();
        table.string('foto').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.integer('reportacoes').notNullable();
        table.string('nomeUsuario').notNullable();
        table.string('bairro').notNullable();
        table.string('rua').notNullable();
    });
}
export async function down(knex:Knex){
    knex.schema.dropTable('ocorrencias')
}