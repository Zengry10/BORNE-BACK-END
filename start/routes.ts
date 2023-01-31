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


  Route.post('menu/:id/drinks', 'MenusController.addDrink')
  Route.post('menu/:id/complement', 'MenusController.addComplement')
  Route.post('menu/:id/burger', 'MenusController.addBurger')


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


  }).prefix('admin')






Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
