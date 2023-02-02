import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'

export default class extends BaseSeeder {
  public async run () {
      await Database.table('create_complement_ingredient_tables').insert([
  
        // Double Cheese
        { complement_id: 1, ingredient_id: 22 },
        { complement_id: 2, ingredient_id: 22 },

      ])
    }
  }

