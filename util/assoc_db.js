const my_db=require('./connect_db')
const Division=require('../model/Division')
const User=require('../model/User')
const  divisi_itc=[
    {name:"WEB DEV"},
    {name:"MOBILE DEV"},
    {name:"PM"},
    {name:"UI/UX"},
    {name:"INKADIV"},
]
//relasi one to many Division to User
Division.hasMany(User)
User.belongsTo(Division)

const association=async()=>{
    try {
        await my_db.sync({force:false})
        //input data divisi ke table
        // Division.bulkCreate(divisi_itc)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=association