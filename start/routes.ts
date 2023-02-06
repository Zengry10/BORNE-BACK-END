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
import Application from '@ioc:Adonis/Core/Application'
import { schema } from '@ioc:Adonis/Core/Validator'
import ValidatorMenu from '../app/Validators/Admin/MenuValidator'
import Menu from '../app/Models/Menu'




Route.group(() => {

  Route.get('/read/user', 'AuthController.show')
  Route.get('me', 'AuthController.me').middleware(['auth'])


  Route.post('menu/:id/drinks', 'MenusController.addDrink')
  Route.post('menu/:id/complement', 'MenusController.addComplement')
  Route.post('menu/:id/burger', 'MenusController.addBurger')

  Route.post("create/ingredient", "IngredientsController.createIngredient")


  Route.get('/read/drink', 'DrinksController.show')
  Route.get('/read/drink/:id', 'DrinksController.showOne')
  Route.post('create/drink', 'DrinksController.createDrink')


  Route.get('/read/complement', 'ComplementsController.show')
  Route.get('/read/complement/:id', 'ComplementsController.showOne')
  Route.post('create/complement', 'ComplementsController.createComplement')

  Route.get('/read/burger', 'BurgersController.show')
  Route.get('/read/burger/:id', 'BurgersController.showOne')
  Route.post('create/burger', 'BurgersController.createBurger')


  Route.get('/read/menu/:id', "MenusController.show")
  Route.get('/read/menu', 'MenusController.index')
  Route.post('/create/menu', "MenusController.createMenu")
  Route.delete('/delete/menu/:id', 'AuthController.delete')


  Route.get('/read/order', 'OrdersController.getOrders')
  Route.post('/create/order', 'OrdersController.createOrder')


  }).prefix('admin')



  Route.post('posts', async ({ request }) => {
    const postSchema = schema.create({
      cover_image: schema.file({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
    })
  
    const payload = await request.validate({ schema: postSchema })
  
    await payload.cover_image.move(Application.publicPath('/image/Menu'))


  })
  


  // const payload2 = await request.validate(ValidatorMenu)

  //   // Crée un nouveau menu en utilisant les données de la requête
  //   const menu = await Menu.create(payload2)

  //   return menu


Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
