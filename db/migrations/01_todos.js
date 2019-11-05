
exports.up = function(knex) {
  return knex.schema.createTable('todos', function (table) {
    table.increments();
    table.string('title', 255).notNullable();
    table.boolean('completed').defaultTo(false);
    
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("todos");
};
