import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from '../../Models/Ingredient'
import ValidatorIngredient from '../../Validators/Admin/ValidatorIngredient'

export default class IngredientsController {
    
    public async createRecette ({ request, response }: HttpContextContract) {
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
