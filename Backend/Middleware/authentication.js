const jwt=require("jsonwebtoken")

const authentication = (req,res,next)=>{

const token=req.headers.authorization

          if(token){

             const decoded=jwt.verify(token,"auth")

           if(decoded){

             const userId=decoded.userId
             const name=decoded.name

            
         
             req.body.userId=userId
             req.body.name=name

             next()
        } else {

             res.status(401).send({
                message:"Please Login first",
                status:false
             })
        }
        } else {
            res.status(401).send({
                message:"Please Login first",
                status:false
             })
        }
}
module.exports={
    authentication
}