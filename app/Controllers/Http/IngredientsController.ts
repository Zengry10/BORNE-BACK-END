import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorIngredient from '../../Validators/Admin/IngredientValidator'
import Ingredient from '../../Models/Ingredient'

export default class IngredientsController {

    public async createIngredient ({ request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorIngredient)
        const ingredient = await Ingredient.create(payload)
        return response.created(ingredient)
      }
}
