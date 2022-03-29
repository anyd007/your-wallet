const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id:String,
    outcome: Number,
    outcome_choose: String,
    outcome_date: String,
    outcome_comment: String
})

module.exports = mongoose.model("users-outcome", schema)