import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from '../../Models/Ingredient'
import ValidatorIngredient from '../../Validators/Admin/ValidatorIngredient'

export default class IngredientsController {
    
    public async createRecette ({ request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorIngredient)
        const ingredient = await Ingredient.create(payload)
        return response.created(ingredient)
      }

      
} 
