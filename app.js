//Mongoose
const mongoose = require('mongoose');

//fruits DB
mongoose
	.connect('mongodb://localhost:27017/fruitsDB', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log('DB server connect'))
	.catch(e => console.log('DB error', e));

const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	review: String
});

//Fruits collection
const Fruit = mongoose.model('Fruit', fruitSchema);

//fruit document
const fruit = new Fruit({
	name: 'Apple',
	rating: 7,
	review: 'Pretty solid as a fruit.'
});

// fruit.save();

const personSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
	name: 'John',
	age: 37
});

// person.save();

const kiwi = new Fruit({
	name: 'Kiwi',
	score: 10,
	review: 'The best fruit!'
});

const orange = new Fruit({
	name: 'Orange',
	score: 4,
	review: 'Too sour for me'
});

const banana = new Fruit({
	name: 'Banana',
	score: 3,
	review: 'Weird texture'
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('Successfully saved all the fruits to fruitsDB');
// 	}
// });

Fruit.find((err, fruits) => {
	if (err) {
		console.log(err);
	} else {
		mongoose.connection.close();
		fruits.forEach(fruit => console.log(fruit.name));
	}
});
