import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from '../../Models/Drink'
import DrinkValidator from '../../Validators/Admin/DrinkValidator'

export default class DrinksController {
    
    public async create ({ request, response }: HttpContextContract) {
        const payload = await request.validate(DrinkValidator)
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
