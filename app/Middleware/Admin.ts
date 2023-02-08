import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    const isAuth = await auth.check()
    if (!isAuth || auth.user!.role !== 'admin') {
      console.log('auth.user: ', auth.user)
      return response.status(401).send('Unauthorized')
    }
    
    
    await next()
  }
}
