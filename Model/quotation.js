var mongoose = require('mongoose');
var { Description } = require('./description');
var { Product } = require('./quoteProduct');

var QuotationSchema = mongoose.Schema({
    salesPersonID: {
        type: mongoose.Schema.Types.ObjectId,
       // require: true
    },
    customerID: {
        type: String,
        require: true
    },
    customerName:{
        type: String, 
        require: true,
        trim: true
    },
    product: [Product],
    status: {
        type: String,
        required: true,
        trim: true,
        enum: ['Draft', 'Prospect', 'Lost', 'Won', 'Production', 'Delivered', 'Invoiced', 'Operation', 'Operation stopped',]
    },
    pdf: {
        type: String
    },
    date:{
        type: String, 
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    description: [Description]
});

var Quotation = mongoose.model('Quotation', QuotationSchema, 'Quotation');

module.exports = { Quotation };