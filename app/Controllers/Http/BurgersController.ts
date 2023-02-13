import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Burger from '../../Models/Burger'
import Ingredient from 'App/Models/Ingredient'
import ValidatorBurger from '../../Validators/Admin/BurgerValidator'
import Database from '@ioc:Adonis/Lucid/Database'
export default class BurgersController {

    // public async createBurger ({ request, response }: HttpContextContract) {
    //     const payload = await request.validate(ValidatorBurger)
    //     const burger = await Burger.create(payload)
    //     return response.created(burger)

    //   }

      public async create({ request, response }: HttpContextContract) {
        // Récupère les données de la requête

        const payload = await request.validate(ValidatorBurger)
    
        // Crée un nouveau plat en utilisant les données de la requête
        const burger = await Burger.create(payload)
    
        // Si les ingrédients sont inclus dans la requête
        if (request.input('ingredients')) {
          // Récupère les ingrédients de la requête
          const ingredients = request.input('ingredients')
    
          // Boucle sur les ingrédients pour les attacher au plat
          for (let ingredient of ingredients) {
            await Database.table('create_ingredient_burger_tables').insert({
              burger_id: burger.id,
              ingredient_id: ingredient
            })
          }
        }
    
        // Renvoie un status 201 (Créé) et les détails du plat créé
        return response.status(201).json(burger)
      }

      






    //   public async addComplement({ params, request, response }: HttpContextContract) {
    //     // Trouve le menu à mettre à jour
    //     const menu = await Menu.findOrFail(params.id)
    
    //     // Récupère les données de la requête
    //     const complementId = request.input('complement_id')
    
    //     // Ajoute la boisson au menu en utilisant la table pivot
    //     await Database.table('create_menu_complement_tables').insert({
    //       menu_id: menu.id,
    //       complement_id: complementId
    //     })
    
    //     return response.status(201).json({
    //       message: 'Complément ajoutée au menu avec succès'
    //     })
    //   }

    public async show({ response }: HttpContextContract){
        const burgers = await Burger.all()
        for(const burger of burgers) {
        await burger.load('ingredients')
        }
        return response.json(burgers)
    }
        
    public async showOne({params}: HttpContextContract){
        const complement = await Burger.find(params.id)
        return complement
    }

    public async delete({ params, response }: HttpContextContract) {
      // Find the menu to delete
      const burger = await Burger.findOrFail(params.id)
    
      // Delete the menu
      await burger.delete()
    
    
    
      return response.status(200).json({
        message: 'Burger supprimé avec succès',
      })
    }

    public async update({ params, request, response }: HttpContextContract) {
      // Find the menu to update
      const burger = await Burger.findOrFail(params.id)
    
      // Get the data from the request
      const payload = await request.validate(ValidatorBurger)
    
      // Update the menu
      burger.name = payload.name
      burger.price = payload.price
      burger.stock = payload.stock
      burger.save()
    
      // If ingredients are included in the request
      if (request.input('ingredients')) {
        // Get the ingredients from the request
        const ingredients = request.input('ingredients')
    
        // Detach all ingredients from the menu
        await burger.related('ingredients').detach()
    
        // Loop through the ingredients and attach them to the menu
        for (let ingredient of ingredients) {
          await Database.table('create_burger_ingredient_tables').insert({
            burger_id: burger.id,
            ingredient_id: ingredient
          })
        }
      }
    
      return response.status(200).json({
        message: 'Burger mis à jour avec succès',
        burger
      })
    }
}
