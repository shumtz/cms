'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.string('title', 255).notNullable()
      table.text('content', 'longText').notNullable()
      table.boolean('draft').defaultTo(0).notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
