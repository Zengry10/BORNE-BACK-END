
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Burger from 'App/Models/Burger'


export default class BurgerSeeder extends BaseSeeder {

  public async run () {
    await Burger.createMany([
      {
        name: "Double Cheese",
        stock: 30,
        price: 8,
      },
      {
        name: "Double Cheese Bacon",
        stock: 30,
        price: 4,
      },
      {
        name: "Burger Royal",
        stock: 30,
        price: 4,
      },
      {
        name: "Big",
        stock: 30,
        price: 4,
      },
      {
        name: "Big Max",
        stock: 30,
        price: 4,
      },
      {
        name: "Chicken Beef",
        stock: 30,
        price: 4,
      },
      {
        name: "Big Bacon",
        stock: 30,
        price: 4,
      },
      {
        name: "GLD",
        stock: 30,
        price: 4,
      },
      {
        name: "Fish",
        stock: 30,
        price: 4,
      },
      {
        name: "Chicken Burger",
        stock: 30,
        price: 4,
      },
      {
        name: "Country",
        stock: 30,
        price: 4,
      },
      {
        name: "Big Chicken",
        stock: 30,
        price: 4,
      },
      {
        name: "Toast",
        stock: 30,
        price: 4,
      },
      {
        name: "180",
        stock: 30,
        price: 4,
      },

    ])
  }

}
