import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class Admin {
  public   async handle ({ auth, response }, next) {
    const user = await auth.User
    if (user.role_id !== 2) {
      return response.forbidden()
    }

    await next()
  }
}
