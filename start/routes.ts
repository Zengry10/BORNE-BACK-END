/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from '../app/Models/User'
import Ingredient from '../app/Models/Ingredient'





Route.group(() => {
  Route.get('read/ingredient', async () => {
  return Ingredient.all()
  })
  Route.get('me', 'AuthController.me').middleware(['auth'])
  Route.post('create/ingredient', 'IngredientsController.createRecette')
  Route.get('/allPlats', 'PlatsController.index')
  Route.get('/read', async () => {
    return  User.all()
  })

  Route.post('/create/plat', "PlatsController.create")
  Route.delete('/delete/plat/:id', 'AuthController.delete')
  Route.get('/read/plat/:id', "PlatsController.show")

  }).prefix('admin').middleware('auth')



  


Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
