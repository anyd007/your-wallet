const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id: String,
    summaryUser: Number,
    summaryAfterOutcome: Number
})

module.exports = mongoose.model("summaryIncome", schema)