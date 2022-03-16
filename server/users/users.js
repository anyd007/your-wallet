const mongoose = require("mongoose");

const schema = mongoose.Schema({
    income: Number,
    income_sum:Number,
    outcome: Number,
    outcome_sum: Number,
    income_comment: String,
    outcome_comment: String,

})
module.exports = mongoose.model("users", schema)