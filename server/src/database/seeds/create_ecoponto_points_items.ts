import { Knex } from "knex";
export async function seed(knex:Knex) {
    await knex('points_items').insert([
        {points_id:1, items_id:1},
        {points_id:1, items_id:2},
        {points_id:1, items_id:3},
    ]);
}