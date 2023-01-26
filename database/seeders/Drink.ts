
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'


export default class DrinkSeeder extends BaseSeeder {

  public async run () {
    await Drink.createMany([
      {
        name: "Coca",
        stock: 30,
        price: 2,
      },
        {
        name: "Fanta",
        stock: 30,
        price: 2,
        },
        {
        name: "Sprite",
        stock: 30,
        price: 2,
        },
        {
        name: "Ice Tea",
        stock: 30,
        price: 2,
        },
        {
        name: "Oasis",
        stock: 30,
        price: 2,
        },
        {
        name: "Orangina",
        stock: 30,
        price: 2,
        },
        {
        name: "Jus d'orange",
        stock: 30,
        price: 2,
        },
        {
        name: "Perrier",
        stock: 30,
        price: 2,
        },
        {
        name: "Eau",
        stock: 30,
        price: 2,
        },
        {
        name: "Schweppes",
        stock: 30,
        price: 2,
        },
    ])
  }

}
