const User=require('../model/User')
const Division=require('../model/Division')
const getAllUsers=async (req, res, next)=>{
    try {
        const users=await User.findAll({attributes: ['id','fullName','angkatan','divisionId']})
        res.status(200).json({
            status: "Success",
            message: "Succesfully fetch all user data",
            users: users
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getUserById=async (req,res,next)=>{
    try {
        //const userId = req.params.userId;
        
        //ambil :userId dari req.params
        const {userId} = req.params; //tipe string
    
        //select user sesuai user id yang diharapkan
        const user = await User.findOne({where:{id: userId},attributes:['id','fullName','angkatan','divisionId']})
    
        if(user == undefined){
            res.status(400).json({
            status: "Error",
            message: `User with id ${userId} doesn't exist!`
            })
        }
        res.status(200).json({
            status:"Success",
            message: "Succesfully fetch user data",
            user: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

const postUser=async(req,res,next)=>{
    try {
        // const name = req.body.name;
        // const email = req.body.email;
        // const password = req.body.password;
        const {fullName,nim,angkatan,email,password,division} = req.body;
        const user_division=await Division.findOne({
            where:{
                name:division
            }
        })
        if(user_division==undefined){
            res.status(400).json({
                status:"Error",
                message:`Division ${division} doesn't exist!`
            })
        }

        const currentUser=await User.create({
            //nama field:nama var
            //jika nama field=var, bisa diringkas
            fullName,
            nim,
            angkatan,
            email,
            password,
            divisionId:user_division.id
        })
        res.status(201).json({
            status:"Success",
            message:"Successfully created new user",
            user:{
                fullName:currentUser.fullName,
                division:user_division.name
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

const deleteUser=async (req,res,next)=>{
    try {
        const {userId} = req.params;
        const user = await User.findOne({where:{id: userId},attributes:['id','fullName','angkatan','divisionId']})
        if(user == undefined){
            res.status(400).json({
            status: "Error",
            message: `User with id ${userId} doesn't exist!`
            })
        }
        const delete_user=await User.destroy({where:{id:userId}})
        res.status(200).json({
            status: "Success",
            message: "Successfully delete user"
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={
    getAllUsers,
    getUserById,
    postUser,
    deleteUser
}