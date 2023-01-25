import Database from '@ioc:Adonis/Lucid/Database'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Menu from '../../Models/Menu'
import ValidatorMenu from '../../Validators/Admin/MenuValidator'
export default class MenusController {
  
  public async create({ request, response }: HttpContextContract) {
    // Récupère les données de la requête
    const data = request.only(['name', 'description', 'price'])

    const payload = await request.validate(ValidatorMenu)

    // Si les ingrédients sont inclus dans la requête
    // Si les ingrédients sont inclus dans la requête
    if (request.input('drinks') && request.input('complements')) {
      // Récupère les ingrédients de la requête
      const drinks = request.input('drinks')
      const complements = request.input('complements')

      // vérifie si la longueur des boissons et des complements sélectionnées est égale à 1
      if ((drinks.length === 1 || drinks.length === 0) && (complements.length === 1 || complements.length === 0)) {
        // Crée un nouveau menu en utilisant les données de la requête
        const menu = await Menu.create(payload)
        // Boucle sur les ingrédients pour les attacher au menu
        for (let drink of drinks) {
          await Database.table('create_menu_drink_tables').insert({
            menu_id: menu.id,
            drink_id: drink
          })
        }
        for (let complement of complements) {
          await Database.table('create_menu_complement_tables').insert({
            menu_id: menu.id,
            complement_id: complement
          })
        }
        // Renvoie un status 201 (Créé) et les
        // Renvoie un status 201 (Créé) et les détails du menu créé
        return response.status(201).json(menu)
      } else {
        // Renvoie une erreur si plus d'une boisson est sélectionnée
        return response.status(400).json({
          message: 'Vous ne pouvez sélectionner qu\'une seule boisson et un seul complement pour un menu'
        })
      }
    } else {
      // Renvoie une erreur si les boissons ou les complements ne sont pas inclus dans la requête
      return response.status(400).json({
        message: 'Vous devez sélectionner une boisson et un complement pour créer un menu'
      })
    }
  }

  
  public async show({ params }: HttpContextContract) {
    const menu = await Menu.findOrFail(params.id)
    await menu.load('drinks')
    await menu.load('complements')
    return menu
  }

  public async index({ response }: HttpContextContract) {
    const menus = await Menu.all()
    for(const menu of menus) {
      await menu.load('drinks')
      await menu.load('complements')
    }
    return response.json(menus)
  }

}