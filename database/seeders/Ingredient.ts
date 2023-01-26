
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ingredient from 'App/Models/Ingredient'


export default class DrinkSeeder extends BaseSeeder {

  public async run () {
    await Ingredient.createMany([
      {
        name: "tomate",
        stock: 30,
        price: 2,
      },
      {
        name: "oignon",
        stock: 30,
        price: 2,
      },
      {
        name: "steack",
        stock: 30,
        price: 2,
      },
      {
        name: "salade",
        stock: 30,
        price: 2,
      },

    ])
  }

}
