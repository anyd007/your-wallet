const mongoose = require("mongoose");

const schema = mongoose.Schema({
    id: String,
    income: Number,
    income_choose: String,
    income_summary: Number,
    income_date:String,
    income_comment: String,
    

})
module.exports = mongoose.model("users_income", schema)