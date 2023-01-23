import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PlatValidator from './PlatValidator'
import Plat from '../Models/Plat'
import Ingredient from '../Models/Ingredient'

export default class PlatController {
    async create({ request, response }: HttpContextContract) {
        const payload = await request.validate(PlatValidator)

        const plat = new Plat()
        plat.name = payload.name
        await plat.save()

        const ingredientsToAssociate = await Ingredient.findMany(payload.ingredients)

        await plat.related('ingredients').saveMany(ingredientsToAssociate)

        return response.status(201).json(plat)
    }
}