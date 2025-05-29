exports.getRoute=(req,res)=>{
    res.json({
        message:"Get request working"
    })
}
exports.postRoute=(req,res)=>{
    const name=req.body.name
    res.send(`I am ${name}`)
}
exports.putRoute=(req,res)=>{
    res.json({
        message:"Put request working"
    })
}
exports.patchRoute=(req,res)=>{
    res.json({
        message:"Patch request working"
    })
}