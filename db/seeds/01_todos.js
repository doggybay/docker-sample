
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          "title": 'rowValue1',
          "completed": true
      },
        {
          "title": 'rowValue2',
          "completed": false
      },
        {
          "title": 'rowValue3',
          "completed": true
      }
      ]);
    });
};
