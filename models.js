
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Rate_My_Cakes');


var ReviewSchema = new mongoose.Schema({
    number: { type: Number , min:1, max:5 , required:true},
    comment:{ type: String, required: true },
},{timestamps: true });

mongoose.model('Review', ReviewSchema);
var Review = mongoose.model('Review')


var CakeSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    image :{ type: String, required: true },
    reviews: [ReviewSchema]
}, {timestamps: true });


mongoose.model('Cake', CakeSchema); 
var Cake = mongoose.model('Cake') 

module.exports = {
    "Cake": Cake,
    "Review": Review,
}