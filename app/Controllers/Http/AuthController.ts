import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorRegister from '../../Validators/Auth/ValidatorRegister'
import ValidatorLogin from '../../Validators/Auth/ValidatorLogin'
import User from '../../Models/User'
 
export default class AuthController {
    
    public async register({request ,response}){
        const payload = await request.validate(ValidatorRegister)

        const user = await User.create(payload)

            return response.created(user)
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const payload = await request.validate(ValidatorLogin)
        const token = await auth.attempt(payload.email, payload.password)
        const user = auth.user!
          try{
            return response.status(200).json({
              "message": "Vous êtes désormais connecté",         
              'token': token,
              user,
          })
        }
          catch (error) {
                return response.status(400).json({
                    "message" : 'Une erreur est survenue',
                    "error" : error
                })  
          }
    }

    async delete({ params, response }) {
        try {
            const user = await User.find(params.id)
            if(!user) throw new Error('User not found')
            await user.delete()
            return response.status(200).send({ message: 'User deleted successfully !' })
        } catch (error) {
            return response.status(404).send({ error: error.message })
        }
    }

    public async me({auth, response} : HttpContextContract) {
        const user = auth.user!
        // i want in the response the user with the role
        await user.load('role_id')

        
        return response.ok({
           ...user.serialize(),
              role: user.role_id

          })
      }

    public async show(){
        const user = await User.all()
        return user
    }

}
