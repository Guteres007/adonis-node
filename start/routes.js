'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('homepage')
Route.get('/backend/posts', 'PostController.create').as('post.create').middleware('auth')
Route.on('/backend/dashboard').render('/backend/dashboard').middleware('auth')
Route.get('/backend/posts/:id', 'PostController.destroy').as('post.destroy').middleware('auth')
Route.post('/backend/posts', 'PostController.store').as('post.store').middleware('auth')
Route.get('register', 'UserController.register').as('user.register')
Route.get('login', 'UserController.login')
Route.post('login', 'UserController.login').as('user.login')
Route.post('/user', 'UserController.store')
Route.get('/logout', 'UserController.logout')



