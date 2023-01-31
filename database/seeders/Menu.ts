
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Menu from 'App/Models/Menu'


export default class MenuuSeeder extends BaseSeeder {

  public async run () {
    await Menu.createMany([
      {
        name: "Menu double cheese",
        description: "Un burger avec deux tranches de fromage, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/DoubleCheese.png",
        price: 8
      },
      {
        name: "Menu Double Cheese Bacon",
        description: "Un burger avec deux tranches de fromage, du bacon, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/DoubleCheeseBacon.png",
        price: 8
      },
      {
        name: "Menu Big",
        description: "Un burger géant avec deux tranches de viande, du fromage, de la salade, de la tomate et des oignons, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/Big.png",
        price: 9
      },
      {
        name: "Menu Big Max",
        description: "Un burger géant avec trois tranches de viande, du fromage, du bacon, de la salade, de la tomate et des oignons, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/BigMax.png",
        price: 11
      },
      {
        name: "Menu Chicken Beef",
        description: "Un burger avec de la viande de poulet et de boeuf, du fromage, de la salade, de la tomate et des oignons, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/ChickenBeef.png",
        price: 11
      },
      {
        name: "Menu Big Bacon",
        description: "Un burger géant avec deux tranches de viande, du fromage, du bacon, de la salade, de la tomate et des oignons, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/BigBacon.png",
        price: 10
      },
      {
        name: "Menu GLD",
        description: "Un burger avec deux tranches de viande, du fromage, de la salade, de la tomate et des oignons, Une sauce spéciale, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/GLD.png",
        price: 9
      },
      {
        name: "Menu Fish",
        description: "Un burger de poisson avec du fromage, de la salade, de la tomate et des oignons, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/Fish.png",
        price: 8
      },
      {
        name: "Menu Chicken Burger",
        description: "Un burger de poulet avec du fromage, de la salade, de la tomate et des oignons, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/ChickenBurger.png",
        price: 12
      },
      {
        name: "Menu Country",
        description: "Un burger avec deux tranches de viande, du fromage, de la salade, de la tomate, des oignons, des oeufs et des lardons, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/Country.png",
        price: 13
      },
      {
        name: "Menu Premium Chicken",
        description: "Un sandwich de poulet grillé accompagné de laitue, tomate, oignons rouges et mayonnaise, avec des frites une boisson ",
        picture : "http://localhost:3333/image/Menu/PremiumChicken.png",
        price: 13
      },
      {
        name: "Menu Toast",
        description: "Un toast grillé avec du fromage fondu, de la laitue, des tomates et des oignons rouges, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/Toast.png",
        price: 8
      },
      {
        name: "Menu 180",
        description: "Un burger de bœuf grillé accompagné de laitue, tomate, oignons rouges et sauce BBQ, avec des frites une boisson",
        picture : "http://localhost:3333/image/Menu/180.png",
        price: 10
      },
    ])
  }

}
