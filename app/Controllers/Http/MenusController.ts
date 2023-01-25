import Database from '@ioc:Adonis/Lucid/Database'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Menu from '../../Models/Menu'
import ValidatorMenu from '../../Validators/Admin/MenuValidator'

export default class MenusController {
  
  public async createMenu({ request, response }: HttpContextContract) {
    // Récupère les données de la requête
    const data = request.only(['name', 'description', 'price'])

    const payload = await request.validate(ValidatorMenu)

    // Crée un nouveau menu en utilisant les données de la requête
    const menu = await Menu.create(payload)
    // Renvoie un status 201 (Créé) et les détails du menu créé
    return response.status(201).json(menu)
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
  


  

  
  public async show({ params }: HttpContextContract) {
    const menu = await Menu.findOrFail(params.id)
    await menu.load('drinks')
    await menu.load('complements')
    await menu.load('burgers')
    return menu
  }

  public async index({ response }: HttpContextContract) {
    const menus = await Menu.all()
    for(const menu of menus) {
      await menu.load('drinks')
      await menu.load('complements')
      await menu.load('burgers')
    }
    return response.json(menus)
  }

}