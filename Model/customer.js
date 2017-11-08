var mongoose = require('mongoose'); 

var {Person} = require('./person'); 

var Customer = mongoose.model('Customer', {
    Person,
    name: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }
}); 