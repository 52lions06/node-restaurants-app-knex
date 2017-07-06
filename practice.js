const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'dev-restaurants-app'
  },
});

knex.select('id', 'name', 'borough', 'cuisine')
  .from('restaurants')
  .where( { borough: 'Manhattan'})
  .debug(true)
  .then(results => console.log(JSON.stringify(results, null, 4)))
  .catch( err => console.log( err ));

//What did the debug do and how does the null / 4 effect the JSON