//Mongoose
const mongoose = require('mongoose');

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

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
	name: 'Apple',
	rating: 7,
	review: 'Pretty solid as a fruit.'
});

fruit.save();

const findDocuments = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('fruits');
	// Find some documents
	collection.find({}).toArray(function(err, fruits) {
		assert.equal(err, null);
		console.log('Found the following records');
		console.log(fruits);
		callback(fruits);
	});
};
