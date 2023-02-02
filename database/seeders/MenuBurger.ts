import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
export default class MenuBurger extends BaseSeeder {

  

  public async run () {
     await Database.table('create_menu_burger_tables').insert([
      { menu_id: 1, burger_id: 1 },
      { menu_id: 2, burger_id: 2 },
      { menu_id: 3, burger_id: 3 },
      { menu_id: 4, burger_id: 4 },
      { menu_id: 5, burger_id: 5 },
      { menu_id: 6, burger_id: 6 },
      { menu_id: 7, burger_id: 7 },
      { menu_id: 8, burger_id: 8 },
      { menu_id: 9, burger_id: 9 },
      { menu_id: 10, burger_id: 10 },
      { menu_id: 11, burger_id: 11 },
    ])
  }
}

module.exports = MenuBurger
