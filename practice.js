const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'dev-restaurants-app'
  },
});

// knex.select('id', 'name', 'borough', 'cuisine')
//   .from('restaurants')
//   .where( { borough: 'Manhattan'})
//   .debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 4)))
//   .catch( err => console.log( err ));

//What did the debug do and how does the null / 4 effect the JSON


//1. Get all restaurants

// knex.select()
// 	.from('restaurants')
// 	.then(results => console.log(results));

//2. Get all Italian restaurants 

// knex.select()
// 	.from('restaurants')
//     .where('cuisine', 'Italian')
// 	.then(results => console.log(results));

//3. Get 10 Italian restaurants, name and id

knex.select('name', 'id')
	.from('restaurants')
    .where('cuisine', 'Italian')
    .limit(10)
	.then(results => console.log(results));