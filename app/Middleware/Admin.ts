import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    const isAuth = await auth.check()
    if (!isAuth || auth.user!.role !== 'admin') {
      return response.unauthorized()
    }
    await next()
  }
}
