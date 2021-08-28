import { Knex } from "knex";
export async function seed(knex:Knex) {
    await knex('points_items').insert([
        {points_id:1, items_id:3},
        {points_id:2, items_id:3},
        {points_id:3, items_id:3},
        {points_id:4, items_id:3},
        {points_id:5, items_id:3},
        {points_id:6, items_id:3},
        {points_id:7, items_id:3},
        {points_id:8, items_id:3},
    ]);
}