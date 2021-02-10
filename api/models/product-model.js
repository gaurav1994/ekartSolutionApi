var monoose = require('mongoose');

var productSchema = monoose.Schema;

var product = new productSchema({
     productName : { type : String, required : true, },
     productImage : { type : String },
     productSize : [{ size : { type : String } , mrp : { type : Number } , price : { type : Number } }],
     productBrand : { type : String, required : true },
     productDescription : { type : String }
})

module.exports = monoose.model('Product', product , 'products')