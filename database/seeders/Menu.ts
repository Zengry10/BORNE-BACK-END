
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Menu from 'App/Models/Menu'


export default class UserSeeder extends BaseSeeder {

  public async run () {
    await Menu.createMany([
      {
        name: "Menu double cheese",
        description: "un burger avec deux tranches de fromage",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger avec deux tranches de fromage, du bacon",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger avec deux tranches de viande, du fromage, de la salade, de la tomate et des oignons",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger géant avec deux tranches de viande, du fromage, de la salade, de la tomate et des oignons",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger géant avec trois tranches de viande, du fromage, du bacon, de la salade, de la tomate et des oignons",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger avec de la viande de poulet et de boeuf, du fromage, de la salade, de la tomate et des oignons,",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger géant avec deux tranches de viande, du fromage, du bacon, de la salade, de la tomate et des oignons",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger avec deux tranches de viande, du fromage, de la salade, de la tomate et des oignons, une sauce spéciale",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger de poisson avec du fromage, de la salade, de la tomate et des oignons",
        price: 8
      },
      {
        name: "Menu double cheese",
        description: "un burger de poulet avec du fromage, de la salade, de la tomate et des oignons",
        price: 8
      },
    ])
  }

}
