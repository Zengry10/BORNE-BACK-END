import Database from '@ioc:Adonis/Lucid/Database'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Menu from '../../Models/Menu'
import ValidatorMenu from '../../Validators/Admin/MenuValidator'

export default class MenusController {

  
  public async create({ request, response }: HttpContextContract) {
    // Récupère les données de la requête

    const payload = await request.validate(ValidatorMenu)

    // Crée un nouveau menu en utilisant les données de la requête
    const menu = await Menu.create(payload)
    // Renvoie un status 201 (Créé) et les détails du menu créé
    try{
      return response.status(201).json({
        message: 'Menu créé avec succès',
        menu
      })
    }catch(e){
      return response.status(400).json({
        message: 'Erreur lors de la création du menu',
        
      })
    }


  }

  public async addDrink({ params, request, response }: HttpContextContract) {
    // Trouve le menu à mettre à jour
    const menu = await Menu.findOrFail(params.id)

    // Récupère les données de la requête
    const drinkId = request.input('drink_id')

    // Ajoute la boisson au menu en utilisant la table pivot
    await Database.table('create_menu_drink_tables').insert({
      menu_id: menu.id,
      drink_id: drinkId
    })

    return response.status(201).json({
      message: 'Boisson ajoutée au menu avec succès'
    })
  }

  public async addComplement({ params, request, response }: HttpContextContract) {
    // Trouve le menu à mettre à jour
    const menu = await Menu.findOrFail(params.id)

    // Récupère les données de la requête
    const complementId = request.input('complement_id')

    // Ajoute la boisson au menu en utilisant la table pivot
    await Database.table('create_menu_complement_tables').insert({
      menu_id: menu.id,
      complement_id: complementId
    })

    return response.status(201).json({
      message: 'Complément ajoutée au menu avec succès'
    })
  }


  public async addBurger({ params, request, response }: HttpContextContract) {
    // Trouve le menu à mettre à jour
    const menu = await Menu.findOrFail(params.id)

    // Récupère les données de la requête
    const burgerId = request.input('burger_id')

    // Ajoute la boisson au menu en utilisant la table pivot
    await Database.table('create_menu_burger_tables').insert({
      menu_id: menu.id,
      burger_id: burgerId
    })

    return response.status(201).json({
      message: 'Burger ajoutée au menu avec succès'
    })
  }
  


  

  
  public async showOne({ params, response }: HttpContextContract) {
    const menu = await Menu.findOrFail(params.id)
    await menu.load('drinks')
    await menu.load('complements')
    await menu.load('burgers', (burgerQuery) => {
      burgerQuery.preload('ingredients')
    })

    return response.status(201).json({
      status: 201,
      data: menu,
    })
  }



  public async show({ response }: HttpContextContract) {
    const data = await Menu.query().preload('burgers', (burgerQuery) => {
      burgerQuery.preload('ingredients')
    })
    .preload('drinks', (drinkQuery) => {
      drinkQuery.preload('ingredients')
    })
    .preload('complements', (complementQuery) => {
      complementQuery.preload('ingredients')
    })

    return response.status(201).json({
      status: 201,
      data: data,
  })

  

  
    // const menus = await Menu.all()
    // const menusBurgers = await Database.from('create_menu_burger_tables')
    // const burgers = await Database.from('burgers')
    // const burgerIngredients = await Database.from('create_burger_ingredient_tables')
    // const ingredients = await Database.from('ingredients')
  
    // const menusDrinks = await Database.from('create_menu_drink_tables')
    // const drinks = await Database.from('drinks')
  
    // const menusComplements = await Database.from('create_menu_complement_tables')
    // const complements = await Database.from('complements')
  
    // const data = menus.map((menu: any) => {
    //   const menuBurgers = menusBurgers.filter((menuBurger: any) => menuBurger.menu_id === menu.id)
    //   const menuBurgersId = menuBurgers.map((menuBurger: any) => menuBurger.burger_id)
    //   const menuBurgersName = burgers.filter((burger: any) => menuBurgersId.includes(burger.id))
    //   const burgerWithIngredients = menuBurgersName.map((burger: any) => {
    //     const burgerIngredientsId = burgerIngredients.filter((burgerIngredient: any) => burgerIngredient.burger_id === burger.id)
    //     const ingredientsId = burgerIngredientsId.map((burgerIngredient: any) => burgerIngredient.ingredient_id)
    //     const ingredientsName = ingredients.filter((ingredient: any) => ingredientsId.includes(ingredient.id))
    //     return {
    //       id: burger.id,
    //       name: burger.name,
    //       price: burger.price,
    //       stock: burger.stock,
    //       picture: burger. picture,
    //       ingredients: ingredientsName
    //     }
    //   })
  
    //   const menuDrinks = menusDrinks.filter((menuDrink: any) => menuDrink.menu_id === menu.id)
    //   const menuDrinksId = menuDrinks.map((menuDrink: any) => menuDrink.drink_id)
    //   const menuDrinksName = drinks.filter((drink: any) => menuDrinksId.includes(drink.id))
  
    //   const menuComplements = menusComplements.filter((menuComplement: any) => menuComplement.menu_id === menu.id)
    //   const menuComplementsId = menuComplements.map((menuComplement: any) => menuComplement.complement_id)
    //   const menuComplementsName = complements.filter((complement: any) => menuComplementsId.includes(complement.id))
  
    //   return {
    //     id: menu.id,
    //     name: menu.name,
    //     price: menu.price,
    //     stock: menu.stock,
    //     picture: menu.picture,
    //     burgers: burgerWithIngredients,
    //     drinks: menuDrinksName,
    //     complements: menuComplementsName
    //   }
    // })
    // return response.status(201).json({
    //   status: 201,
    //   data: data,
    // })
  }
  
}

  



