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

 // Auth routes
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')

  // User routes
  Route.get('/user', 'AuthController.show')
  Route.delete('/user/:id', 'AuthController.delete')


  // Menu routes
  
  Route.post('/menu', "MenusController.create")
  Route.delete('/menus/:id', 'MenusController.delete')
  Route.get('/menu/:id', "MenusController.showOne")



  // Add supplémenet Menu routes
  Route.post('menu/:id/drinks', 'MenusController.addDrink')
  Route.post('menu/:id/complement', 'MenusController.addComplement')
  Route.post('menu/:id/burger', 'MenusController.addBurger')

  // Ingredient routes
  Route.post("/ingredient", "IngredientsController.create")
  Route.get('/ingredient', 'IngredientsController.show')
  Route.get('/ingredient/:id', 'IngredientsController.showOne')

  // Drink routes
  Route.get('/drink', 'DrinksController.show')
  Route.get('/drink/:id', 'DrinksController.showOne')
  Route.post('/drink', 'DrinksController.create')

  // Complement routes
  Route.post('/complement', 'ComplementsController.create')
  Route.get('/complement', 'ComplementsController.show')
  Route.get('/complement/:id', 'ComplementsController.showOne')

  // Burger routes
  Route.post('/burger', 'BurgersController.create')
  Route.get('/burger', 'BurgersController.show')
  Route.get('/burger/:id', 'BurgersController.showOne')
  Route.delete('/burger/:id', 'BurgersController.delete')
  Route.put('/burger/:id', 'BurgersController.update')
  
  // Order routes
  Route.get('/order', 'OrdersController.show')
  Route.post('/order', 'OrdersController.create')

  // User ROUTES


  Route.group(() => {
    Route.get('me', 'AuthController.me')
    Route.get('/menu', 'MenusController.show')

  }).middleware('auth')





















Route.post('posts', async ({ request }) => {

  const postSchema = schema.create({
    cover_image: schema.file({
      size: '2mb',
      extnames: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'PNG', 'JPG', 'JPEG', 'GIF', 'SVG'],
    }),

  })

  const payload = await request.validate({ schema: postSchema })

  await payload.cover_image.move(Application.publicPath('/image/Menu'))


})

