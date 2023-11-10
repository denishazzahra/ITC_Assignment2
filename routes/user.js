const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, postUser, deleteUser }=require('../controller/user')


//GET /users (ENDPOINT 1)
router.get("/users", getAllUsers)

//GET /users/:userId -> GET /users/1
router.get("/users/:userId", getUserById)

//POST /users
router.post("/users", postUser)

//PUT /users

//DELETE /users/:userId
router.delete("/users/:userId", deleteUser)




module.exports = router;