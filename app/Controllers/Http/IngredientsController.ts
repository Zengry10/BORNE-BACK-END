import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorIngredient from '../../Validators/Admin/IngredientValidator'
import Ingredient from '../../Models/Ingredient'

export default class IngredientsController {

    public async create ({ request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorIngredient)
        const ingredient = await Ingredient.create(payload)
        return response.created(ingredient)
      }

    public async show(){
      const ingredient = await Ingredient.all()
      return ingredient
    }
    
    
    public async showOne({params}: HttpContextContract){
      const ingredient = await Ingredient.find(params.id)
      return ingredient
    }
}
