import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from '../../Models/User'

export default class IngredientsController {
    public async CreateRecette ({ request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorStore)
        const ingredient = await Ingredient.create(payload)
        return response.created(ingredient)
      }
}
