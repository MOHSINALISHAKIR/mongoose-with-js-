//require mongoose
const mongoose = require('mongoose');

// connect with database 
main().then(()=>{
    console.log("sucessful connected");
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
//define schema for user
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

//define models for userschem 
const User= mongoose.model("User",userSchema);
User.findOneAndUpdate({name:"mohsin"},{name:"M.SHAKIR"}).then((res)=>{
    console.log(res);
    

}
)

// User.updateOne({name:"mohsin"},{age:20}).then((res)=>{console.log(res);
// })



// User.insertMany([{
//     name:"mohsin",
//     email:"mohsin@gmil.com",
//     age:22,
// },{
//     name:"usman",
//     email:"usman@gmail.com",
//     age:18,
// },{
//     name:"umar",
//     email:"umar@gmil.com",
//     age:13,
// }]).then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// });

// const user1= new User({
//     name:"adam",
//     email:"adam@gmil.com",
//     age:34,
// });
// user1.save();