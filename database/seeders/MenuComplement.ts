import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
export default class MenuBurger extends BaseSeeder {

  

  public async run () {
     await Database.table('create_menu_complement_tables').insert([
      { menu_id: 1, complement_id: 1 },
      { menu_id: 1, complement_id: 2 },

      { menu_id: 2, complement_id: 1 },
      { menu_id: 2, complement_id: 2 },

      { menu_id: 3, complement_id: 1 },
      { menu_id: 3, complement_id: 2 },

      { menu_id: 4, complement_id: 1 },
      { menu_id: 4, complement_id: 2 },

      { menu_id: 5, complement_id: 1 },
      { menu_id: 5, complement_id: 2 },

      { menu_id: 6, complement_id: 1 },
      { menu_id: 6, complement_id: 2 },

      { menu_id: 7, complement_id: 1 },
      { menu_id: 7, complement_id: 2 },

      { menu_id: 8, complement_id: 1 },
      { menu_id: 8, complement_id: 2 },

      { menu_id: 9, complement_id: 1 },
      { menu_id: 9, complement_id: 2 },

      { menu_id: 10, complement_id: 1 },
      { menu_id: 10, complement_id: 2 },

      { menu_id: 11, complement_id: 1 },
      { menu_id: 11, complement_id: 2 },
    ])
  }
}

module.exports = MenuBurger
