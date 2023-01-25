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





Route.group(() => {

  Route.get('/read/user', 'AuthController.show')
  Route.get('me', 'AuthController.me').middleware(['auth'])


  Route.get('/read/drink', 'DrinksController.show')
  Route.get('/read/drink/:id', 'DrinksController.showOne')
  Route.post('create/drink', 'DrinksController.createDrink')


  Route.get('/read/plat/:id', "PlatsController.show")
  Route.get('/allPlats', 'PlatsController.index')
  Route.post('/create/plat', "PlatsController.create")
  Route.delete('/delete/plat/:id', 'AuthController.delete')


  }).prefix('admin').middleware('auth')



  


Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
