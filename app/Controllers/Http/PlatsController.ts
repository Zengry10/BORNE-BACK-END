import Database from '@ioc:Adonis/Lucid/Database'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Plat from '../../Models/Plat'
import ValidatorPlat from '../../Validators/Admin/PlatValidator'
export default class PlatsController {

  public async create({ request, response }: HttpContextContract) {
    // Récupère les données de la requête
    const data = request.only(['name', 'description', 'price'])

    const payload = await request.validate(ValidatorPlat)

    // Crée un nouveau plat en utilisant les données de la requête
    const plat = await Plat.create(payload)

    // Si les ingrédients sont inclus dans la requête
    if (request.input('drinks')) {
      // Récupère les ingrédients de la requête
      const drinks = request.input('drinks')

      // Boucle sur les ingrédients pour les attacher au plat
      for (let drink of drinks) {
        await Database.table('create_plat_drink_tables').insert({
          plat_id: plat.id,
          drink_id: drink
        })
      }
    }

    // Renvoie un status 201 (Créé) et les détails du plat créé
    return response.status(201).json(plat)
  }



  public async show({ params }: HttpContextContract) {
    const plat = await Plat.findOrFail(params.id)
    await plat.load('drinks')
    return plat
  }

  public async index({ response }: HttpContextContract) {
    const plats = await Plat.all()
    for(const plat of plats) {
      await plat.load('drinks')
    }
    return response.json(plats)
  }

  

}