import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
export default class MenuBurger extends BaseSeeder {

  

  public async run () {
     await Database.table('create_menu_burger_tables').insert([
      { menu_id: 1, burger_id: 1 },
      { menu_id: 1, burger_id: 2 },
      { menu_id: 2, burger_id: 3 },
      { menu_id: 2, burger_id: 4 },
      { menu_id: 3, burger_id: 5 },
    ])
  }
}

module.exports = MenuBurger
