import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('create_drink_ingredient_tables').insert([
  
      
      { drink_id: 1, ingredient_id: 23 },
      { drink_id: 2, ingredient_id: 23 },
      { drink_id: 3, ingredient_id: 23 },
      { drink_id: 4, ingredient_id: 23 },
      { drink_id: 5, ingredient_id: 23 },
      { drink_id: 6, ingredient_id: 23 },
      { drink_id: 7, ingredient_id: 23 },
      { drink_id: 8, ingredient_id: 23 },
      { drink_id: 9, ingredient_id: 23 },
      { drink_id: 10, ingredient_id: 23 },
      { drink_id: 11, ingredient_id: 23 },
    ])
  }
}
