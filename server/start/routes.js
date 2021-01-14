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

Route.on('/').render('welcome')
Route.get('/api/', 'PostController.index')
Route.post('/api/post/create', 'PostController.store')
Route.put('/api/post/:id', 'PostController.update')
Route.get('/api/post/:id', 'PostController.show')
Route.delete('/api/post/:id', 'PostController.destroy')

