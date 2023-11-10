require("dotenv").config()
const DB_NAME=process.env.DB_NAME
const DB_USER=process.env.DB_USER
const DB_PW=process.env.DB_PW

const Sequelize=require('sequelize')
const my_db=new Sequelize(DB_NAME,DB_USER,DB_PW,{
    host:"localhost",
    dialect:"mysql"
}) // argumen=(nama db, uname db, pw db, {option})

module.exports=my_db