const User=require('../model/user');
//Creating Users
// const userB=new User({
//     Name:'Pawan',Email:"abc@gmail.com",ReferredUser:null,isPaymentMade:false,TotalEarnings:80
// })
// userB.save();
// const userA=new User({
//     Name:'DAKSH',Email:"xyz@gmail.com",ReferredUser: userB,isPaymentMade:false,TotalEarnings:40
// })
// userA.save();


module.exports.referal=async function(req,res){
    //Finding the user by its id 
    User.findOne({_id:req.body.userId}).populate('ReferredUser').exec().then(user=>{
        user.isPaymentMade=true;
        user.ReferredUser.TotalEarnings=user.ReferredUser.TotalEarnings+10;
        //Saving the changed document
        user.ReferredUser.save();user.save();
        res.status(200).json({status:"ok"});
    }).catch(err=>{
        //Handling Error
        res.send("Error in referal payment");
    })   
}
