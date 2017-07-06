const knex = require('knex')({
  client: 'pg',
  connection: {
   	password : 'dev',
    database: 'dev-restaurants-app',
    user: 'dev'
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

// knex.select('name', 'id')
// 	.from('restaurants')
//     .where('cuisine', 'Italian')
//     .limit(10)
// 	.then(results => console.log(results));

//4. Count of Thai restaurants
// knex('restaurants')
// 	.where('cuisine', 'Thai')
// 	.count()
// 	.then(results => console.log(results));

// 
//5. Count of restaurants
// knex.select()
// 	.from('restaurants')
// 	.count()
// 	.then(results => console.log(results));

//6. Count of Thai restaurants in 11372 zip code
// knex('restaurants')
// 	.where( {'cuisine': 'Thai', 'address_zipcode': '11372'})
// 	.count()
// 	.then(results => console.log(results));

//7. Italian restaurants in zipcode of 10012, 10013, or 10014
// knex.select('name', 'id', 'address_zipcode')
// 	.from('restaurants')
// 	.where('cuisine', 'Italian')
// 	.whereIn('address_zipcode', [10012, 10013, 10014])
// 	.orderBy('name', 'asc')
// 	.limit(5)
// 	.then(results => console.log(results));