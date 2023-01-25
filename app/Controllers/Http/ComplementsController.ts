import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Complement from '../../Models/Complement'
import ValidatorComplement from '../../Validators/Admin/ComplementValidator'

export default class ComplementsController {

    public async createComplement ({ request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorComplement)
        const complement = await Complement.create(payload)
        return response.created(complement)
      }

    public async show(){
    const complement = await Complement.all()
    return complement
    }
    
    
    public async showOne({params}: HttpContextContract){
    const complement = await Complement.find(params.id)
    return complement
    }
}
