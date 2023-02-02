
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Burger from 'App/Models/Burger'


export default class BurgerSeeder extends BaseSeeder {

  public async run () {
    await Burger.createMany([
      {
        name: "Double Cheese",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/DoubleCheese.png",
        price: 8,
      },
      {
        name: "Double Cheese Bacon",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/DoubleCheeseBacon.png",
        price: 4,
      },
      {
        name: "Big",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/Big.png",
        price: 4,
      },
      {
        name: "Big Max",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/BigMax.png",
        price: 4,
      },
      {
        name: "Chicken Beef",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/ChickenBeef.png",
        price: 4,
      },
      {
        name: "Big Bacon",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/BigBacon.png",
        price: 4,
      },
      {
        name: "GLD",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/gld.png",
        price: 4,
      },
      {
        name: "Fish",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/Fish.png",
        price: 4,
      },
      {
        name: "Chicken Burger",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/chickenburger.png",
        price: 4,
      },
      {
        name: "Toast",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/toast.png",
        price: 4,
      },
      {
        name: "180",
        stock: 30,
        picture : "http://localhost:3333/image/Burger/180.png",
        price: 4,
      },
      // {
      //   name: "180 Poivre",
      //   stock: 30,
      //   picture : "image/Burger/180Poivre.png",
      //   price: 4,
      // },
      // {
      //   name: "Grill",
      //   stock: 30,
      //   picture : "image/Burger/grill.png",
      //   price: 4,
      // },
      //       {
      //   name: "Double Grill",
      //   stock: 30,
      //   picture : "image/Burger/doublegrill.png",
      //   price: 4,
      // },

    ])
  }

}
