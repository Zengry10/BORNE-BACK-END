import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from '../../Models/Drink'
import ValidatorDrink from '../../Validators/Admin/ValidatorDrink'

export default class DrinksController {
    
    public async createDrink ({ request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorDrink)
        const drink = await Drink.create(payload)
        return response.created(drink)
      }

      public async show(){
        const drink = await Drink.all()
        return drink
      }
      
      
      public async showOne({params}: HttpContextContract){
        const drink = await Drink.find(params.id)
        return drink
      }
} 
