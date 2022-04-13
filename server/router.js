const express = require("express");
const router = express.Router()
const usersDataIncome = require("./users/users_income");
const usersDataOutcome = require("./users-outcome/users-outcome")
const regUsers = require("./regestry/regestry")
const summaryData = require("./summaryIncome/summaryIncome")

router.get("/regestry", async (req,res)=>{
    const mongo_reg = await regUsers.find();
    res.send(mongo_reg)
})

router.post("/regestry", async (req,res)=>{
    const post = new regUsers({
        id: req.body.id,
    username: req.body.username,
    password: req.body.password
    })
    await post.save();
    res.send.post;
})

router.get("/users_income", async (req,res)=>{
    const mongo_user_income = await usersDataIncome.find();
    res.send(mongo_user_income);
})
router.post("/users_income", async (req,res)=>{
    const post = new usersDataIncome({
        id: req.body.id,
        income: req.body.income,
        income_summary: req.body.income_summary,
        income_choose: req.body.income_choose,
        income_date: req.body.income_date,
        income_comment: req.body.income_comment
    })
    await post.save();
    res.send.post;
})
router.delete("/users_income/:id", async (req, res)=>{
    const result = await usersDataIncome.deleteOne({_id: req.params.id})
    res.send(result)
})
router.get("/users-outcome", async (req, res)=>{
    const mongo_user_outcome = await usersDataOutcome.find();
    res.send(mongo_user_outcome)
})
router.post("/users-outcome", async (req, res)=>{
    const post = new usersDataOutcome({
        id: req.body.id,
    outcome: req.body.outcome,
    outcome_choose: req.body.outcome_choose,
    outcome_date: req.body.outcome_date,
    outcome_comment: req.body.outcome_comment
    })
    await post.save()
    res.send.post
})
router.get("/summary", async (req,res)=>{
    const mongo_summaryData = await summaryData.find()
    res.send(mongo_summaryData)
})
router.post("/summary", async (req,res)=>{
    const post = new summaryData({
    id: req.body.id,
    summaryUser: req.body.summaryUser,
    summaryAfterOutcome: req.body.summaryAfterOutcome
    })
    await post.save()
    res.send.post
})
module.exports = router