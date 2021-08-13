import {Knex} from 'knex';
export async function up(knex:Knex) {
    return knex.schema.createTable('points', table=>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('rua').notNullable();
        table.integer('numberAddress').notNullable();
        table.string('bairro').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.time('horarioFuncionamentoInicio').notNullable();
        table.time('horarioFuncionamentoFim').notNullable();
        table.boolean('abreDomingo').notNullable();
        table.integer('items').notNullable();
        
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('points')
}