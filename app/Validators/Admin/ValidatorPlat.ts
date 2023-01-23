import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules } from '@ioc:Adonis/Core/Validator'

export default class ValidatorPlatValidator {
  constructor(protected ctx: HttpContextContract) {}



    public schema = schema.create({
      name: schema.string({ trim: true }, [
        schema.unique({ table: 'plats', column: 'name' }),
      ]),
      ingredients: schema.array({}, [
          schema.exists({ table: 'ingredients', column: 'id' }),
      ]),
      'ingredients.*.id': schema.number(),
    })
  

  public messages: CustomMessages = {}
}
