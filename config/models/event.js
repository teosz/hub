var mongoose = require('mongoose')


var eventSchema = mongoose.Schema({
    name         : String,
    start        : Date,
    end          : Date,
    location     : String,
    email        : String,
    link         : String,
    description  : String,
    publisher    : String,
    membersOnly  : {type: Boolean, default: false},
    tags         : [String],

    activity_id  : String,
    edition_id   : String,
})


// create the model for users and expose it to our app
exports.event = mongoose.model('Event', eventSchema)
