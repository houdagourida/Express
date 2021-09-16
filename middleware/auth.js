const isAuth=(req,res,next)=>{
    const auth=true
    if(auth){
        next()
    }
    else{
        res.send({mes:"sorry"})
    }
}

module.exports=isAuth