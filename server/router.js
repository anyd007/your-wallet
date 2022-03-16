const express = require("express");
const router = express.Router()
const usersData = require("./users/users");
const regUsers = require("./regestry/regestry")

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

router.get("/users", async (req,res)=>{
    const mongo_user = await usersData.find();
    res.send(mongo_user);
})
router.post("/users", async (req,res)=>{
    const post = new usersData({
        income: req.body.income,
        income_sum: req.body.income_sum,
        outcome: req.body.outcome,
        outcome_sum: req.body.outcome_sum,
        income_comment: req.body.income_comment,
        outcome_comment: req.body.outcome_comment,
    })
    await post.save();
    res.send.post;
})
module.exports = router