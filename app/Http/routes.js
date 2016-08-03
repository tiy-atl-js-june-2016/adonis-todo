'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

// Todos
Route.get('/todos', 'TodoController.index')
Route.get('/todos/:id', 'TodoController.show')
Route.post('/todos', 'TodoController.store')
Route.put('/todos/:id', 'TodoController.update')
Route.delete('/todos/:id', 'TodoController.destroy')