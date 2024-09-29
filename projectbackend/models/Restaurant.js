const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String },
    rating: { type: Number, default: 0 },
    reviews: [{ user: String, comment: String }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
