
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Complement from 'App/Models/Complement'


export default class FriteSeeder extends BaseSeeder {

  public async run () {
    await Complement.createMany([
      {
        name: "frites",
        stock: 30,
        picture: "image/Complement/Frites.png",
        price: 4,
      },
      {
        name: "potatoes",
        stock: 30,
        picture: "image/Complement/potatoes.png",
        price: 4,
      },
    ])
  }

}
