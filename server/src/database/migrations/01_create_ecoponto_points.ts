import {Knex} from 'knex';
export async function up(knex:Knex) {
    return knex.schema.createTable('points', table=>{
        table.integer('id').primary();
        table.string('imagem').notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('endereco').notNullable();
        table.string('descricao').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('points')
}