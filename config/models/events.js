// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var eventSchema = mongoose.Schema({
    name         : String,
    date         : String,
    location     : String,
    email        : String,
    description  : String,
    publisher    : String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Event', eventSchema);