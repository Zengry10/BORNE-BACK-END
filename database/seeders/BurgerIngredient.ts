import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('create_burger_ingredient_tables').insert([

      // Double Cheese
      { burger_id: 1, ingredient_id: 1 },
      { burger_id: 1, ingredient_id: 12 },
      { burger_id: 1, ingredient_id: 14 },
      { burger_id: 1, ingredient_id: 10 },
      { burger_id: 1, ingredient_id: 19 },
      { burger_id: 1, ingredient_id: 7 },


      // Double Cheese Bacon
      { burger_id: 2, ingredient_id: 1 },
      { burger_id: 2, ingredient_id: 12 },
      { burger_id: 2, ingredient_id: 14 },
      { burger_id: 2, ingredient_id: 10 },
      { burger_id: 2, ingredient_id: 18 },
      { burger_id: 2, ingredient_id: 7 },
      { burger_id: 2, ingredient_id: 4 },


      //Le Big

      { burger_id: 3, ingredient_id: 1 },
      { burger_id: 3, ingredient_id: 15 },
      { burger_id: 3, ingredient_id: 11 },
      { burger_id: 3, ingredient_id: 10 },
      { burger_id: 3, ingredient_id: 18 },
      { burger_id: 3, ingredient_id: 7 },

      // Le Big Max

      { burger_id: 4, ingredient_id: 1 },
      { burger_id: 4, ingredient_id: 14 },
      { burger_id: 4, ingredient_id: 11 },
      { burger_id: 4, ingredient_id: 10 },
      { burger_id: 4, ingredient_id: 18 },
      { burger_id: 4, ingredient_id: 7 },

      // Chicken Beef

      { burger_id: 5, ingredient_id: 1 },
      { burger_id: 5, ingredient_id: 2 },
      { burger_id: 5, ingredient_id: 15 },
      { burger_id: 5, ingredient_id: 11 },
      { burger_id: 5, ingredient_id: 10 },
      { burger_id: 5, ingredient_id: 18 },
      { burger_id: 5, ingredient_id: 7 },

      // Big Bacon

      { burger_id: 6, ingredient_id: 1 },
      { burger_id: 6, ingredient_id: 15 },
      { burger_id: 6, ingredient_id: 11 },
      { burger_id: 6, ingredient_id: 10 },
      { burger_id: 6, ingredient_id: 18 },
      { burger_id: 6, ingredient_id: 7 },
      { burger_id: 6, ingredient_id: 8 },
      { burger_id: 6, ingredient_id: 4 },

      // GLD

      { burger_id: 7, ingredient_id: 1 },
      { burger_id: 7, ingredient_id: 16 },
      { burger_id: 7, ingredient_id: 11 },
      { burger_id: 7, ingredient_id: 10 },
      { burger_id: 7, ingredient_id: 7 },

      // Fish

      { burger_id: 8, ingredient_id: 5 },
      { burger_id: 8, ingredient_id: 11 },
      { burger_id: 8, ingredient_id: 19 },
      { burger_id: 8, ingredient_id: 7 },

      // Chicken Burger

      { burger_id: 9, ingredient_id: 2 },
      { burger_id: 9, ingredient_id: 13 },
      { burger_id: 9, ingredient_id: 11 },
      { burger_id: 9, ingredient_id: 7 },

      // Toast 

      { burger_id: 10, ingredient_id: 3 },
      { burger_id: 10, ingredient_id: 11 },
      { burger_id: 10, ingredient_id: 20 },
      { burger_id: 10, ingredient_id: 21 },
      { burger_id: 10, ingredient_id: 9 },
      { burger_id: 10, ingredient_id: 10 },
      { burger_id: 10, ingredient_id: 7 },
      { burger_id: 10, ingredient_id: 8 },

      // 180

      { burger_id: 11, ingredient_id: 1 },
      { burger_id: 11, ingredient_id: 12 },
      { burger_id: 11, ingredient_id: 13 },
      { burger_id: 11, ingredient_id: 9 },
      { burger_id: 11, ingredient_id: 10 },
      { burger_id: 11, ingredient_id: 7 },
      { burger_id: 11, ingredient_id: 8 },

      

     ])  
    }
  }

