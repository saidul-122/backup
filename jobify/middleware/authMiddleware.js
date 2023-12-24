export const authenticateUser =  (req,res,next) =>{
    console.log(req.cookies);
    next();
}