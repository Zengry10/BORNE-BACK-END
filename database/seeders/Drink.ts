
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'


export default class DrinkSeeder extends BaseSeeder {

  public async run () {
    await Drink.createMany([
      {
        name: "Coca-Cola original 33 cL",
        stock: 30,
        price: 2,
      },
        {
        name: "Schweppes agrum' 33 cL",
        stock: 30,
        price: 2,
        },
        {
        name: "Fuze Tea pêche 33 cL",
        stock: 30,
        price: 2,
        },
        {
        name: "Capri-Sun Multivitamin 20cl",
        stock: 30,
        price: 2,
        },
        {
        name: "Oasis tropical 33 cL",
        stock: 30,
        price: 2,
        },
        {
        name: "Oasis pomme cassis framboise 2 L",
        stock: 30,
        price: 2,
        },
        {
        name: "Oasis tropical 2 L",
        stock: 30,
        price: 2,
        },
        {
        name: "Vittel 50 cL",
        stock: 30,
        price: 2,
        },
        {
        name: "San Pellegrino 1 L",
        stock: 30,
        price: 2,
        },
        {
        name: "Orangina 1,5 L",
        stock: 30,
        price: 2,
        },
        {
          name: "Sprite 1,25 L",
          stock: 30,
          price: 2,
        },
        {
          name: "Perrier 33 cL",
          stock: 30,
          price: 2,
        },
    ])
  }

}
