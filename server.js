/** This is our server file! Where the magic happens. **/

// require express, for routing, and body parser, for form parsing
let express = require('express'),
    bodyParser = require('body-parser');

// connect to db models
let db = require('./models');

// make a new express app named "app".
let app = express();

// Body parser and encoding setup.
app.use(bodyParser.urlencoded({
    extended: true
}));

// get all
app.get('', (req, res) => {
});

// get one
app.get('', (req, res) => {
});

// create new 
app.post('', (req, res) => {
});

// delete one
app.delete('', (req, res) => {
});

// update one
app.put('', (req, res) => {
});

// This is where we serve our API!
app.listen(process.env.PORT || 5000, () => {
    console.log('Your First API is running on http://localhost:5000/');
});
