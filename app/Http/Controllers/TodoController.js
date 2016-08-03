'use strict';

const Todo = use('App/Model/Todo');

class TodoController {

  * index (request, response) {
    let todos = yield Todo.all();
    yield response.json(todos.toJSON());
  }

  * show (request, response) {
    // /todos/:id
    let todo = yield Todo.findBy('id', request.param('id'));
    yield response.json(todo.toJSON());
  }

  * store (request, response) {
    let data = request.only('title');
    data.status = 'false';

    let newTodo = yield Todo.create(data);
    yield response.json(newTodo.toJSON());
  }

  * update (request, response) {
    let todo = yield Todo.findBy('id', request.param('id'));
    let data = request.only('title', 'status');
    todo.title = data.title;
    todo.status = data.status;
    yield todo.save();
    yield response.json(todo.toJSON());
  }

  * destroy (request, response) {
    let todo = yield Todo.findBy('id', request.param('id'));
    yield todo.delete();
    yield response.json({ success: true });
  }



}

module.exports = TodoController;