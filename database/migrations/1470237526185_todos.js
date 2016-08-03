'use strict'

const Schema = use('Schema')

class TodosSchema extends Schema {

  up () {
    this.create('todos', (table) => {
      table.increments();
      table.string('title');
      table.string('status');
      table.timestamps();
    });
  }

  down () {
    this.drop('todos');
  }

}

module.exports = TodosSchema
