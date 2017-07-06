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

//8. Create a restaurant 

// knex.insert({name: 'Byte Cate', borough: 'Brooklyn', cuisine: 'coffee', address_building_number: '123', address_street: 'Atlantic Avenue',address_zipcode: '11231'}, 'id')
//   .into('restaurants')
//   .returning(['name','id'])
//   .then(results => console.log(results));

//9. Create a restuarant but return name and id

// knex.insert({name: 'ULTIMATE TACO', borough: 'Manhattan', cuisine: 'mexican', address_building_number: '456', address_street: 'Heaven Street',address_zipcode: '10001'})
//   .into('restaurants')
//   .returning(['name','id'])
//   .then(results => console.log(results));

//10. Create three restaurants and return id and name

// knex.insert([{name: 'ULTIMATE TACO', borough: 'Manhattan', cuisine: 'Mexican' , address_building_number: '456', address_street: 'Heaven Street',address_zipcode: '10001'
// },
//             {name: 'Luigi"s Pizza', borough: 'Brooklyn', cuisine: 'Pizza', address_building_number: '5568', address_street: 'Brooklyn Street',address_zipcode: '11111'
// },
//             {name: 'Bowser Boom Burgers', borough: 'Queens', cuisine: 'America', address_building_number: '23', address_street: 'Lebron Jordan Street',address_zipcode: '23232'
// }])
//   .into('restaurants')
//   .returning(['name','id','cuisine'])
//   .then(results => console.log(results));


//11. Update the record 

// knex('restaurants')
// .where('nyc_restaurant_id', '30191841')
// // .update({name:'DJ Reynolds Pub and Restaurant'})
// .then(results => console.log(results));


//12. Delete the id
// knex.select()
// .from('grades')
// .where({id: 12, grade: 'A'})
// .del({grade: 'A'})
// .then(results => console.log(results));

//13. Blocked Delete 

knex.select()
.from('restaurants')
.where({id: 22})
.del()
.then(results => console.log(results));