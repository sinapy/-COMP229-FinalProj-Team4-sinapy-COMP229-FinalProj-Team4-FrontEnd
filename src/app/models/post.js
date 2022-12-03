let mongoose = require('mongoose');

let productModel = mongoose.Schema(
    {
        _id: String,
        title: String,
        status: {
            type: String,
            enum: ['ENABLE', 'DISABLE'],
            default: 'ENABLE'
        },
        price: Number,
        expires_on: Date
    },
    {
        collection: "Products"
    }
)

module.exports = mongoose.model("Products", productModel);
