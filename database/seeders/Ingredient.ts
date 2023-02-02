
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ingredient from 'App/Models/Ingredient'


export default class DrinkSeeder extends BaseSeeder {

  public async run () {
    await Ingredient.createMany([
      {
        name: "steack",
        stock: 30,
        price: 2,
      },
      {
        name: "steack de poulet pané",
        stock: 30,
        price: 2,
      },
      {
        name: "steack façon bouchère",
        stock: 30,
        price: 2,
      },
      {
        name: "bacon de dinde",
        stock: 30,
        price: 2,
      },
      {
        name: "filet de poisson pané",
        stock: 30,
        price: 2,
      },
      {
        name: "galette de pomme de terre",
        stock: 30,
        price: 2,
      },
      {
        name: "cheddar",
        stock: 30,
        price: 2,
      },
      {
        name: "emmental",
        stock: 30,
        price: 2,
      },
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
        name: "salade",
        stock: 30,
        price: 2,
      },
      {
        name: "ketchup",
        stock: 30,
        price: 2,
      },
      {
        name: "mayonnaise",
        stock: 30,
        price: 2,
      },
      {
        name: "moutarde",
        stock: 30,
        price: 2,
      },

      {
        name: "sauce big",
        stock: 30,
        price: 2,
      },
      {
        name: "sauce gld",
        stock: 30,
        price: 2,
      },
      {
        name: "sauce poivrée",
        stock: 30,
        price: 2,
      },
      {
        name: "cornichon",
        stock: 30,
        price: 2,
      },
      {
        name: "tartare",
        stock: 30,
        price: 2,
      },
      {
        name: "bacon",
        stock: 30,
        price: 2,
      },
      {
        name: "sauce fumée",
        stock: 30,
        price: 2,
      },



    ])
  }

}
