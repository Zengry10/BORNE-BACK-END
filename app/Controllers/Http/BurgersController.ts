import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Burger from '../../Models/Burger'
import ValidatorBurger from '../../Validators/Admin/BurgerValidator'
export default class BurgersController {

    public async createComplement ({ request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorBurger)
        const complement = await Burger.create(payload)
        return response.created(complement)
      }

    public async show(){
        const complement = await Burger.all()
        return complement
    }
        
        
    public async showOne({params}: HttpContextContract){
        const complement = await Burger.find(params.id)
        return complement
    }
}
