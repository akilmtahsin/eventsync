const jwt = require("jsonwebtoken");
const jwt_key = process.env.JWT_SECRET;



const auth = (req, res, next ) => {
  try {

    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token,jwt_key);
    
      req.userId = user.id;
      req.userRole = user.role;

      // if (user.role === 'user') {
      //   req.userId = user.id;
      //   req.uid = user.id;
     
        
      // } else if (user.role === 'organizer') {
        
      //   req.organizerId = user.id;
      //   req.uid = user.id;
      // }
      // else if (user.role === 'admin') {
        
      //   req.adminId = user.id;
      //   req.uid = user.id;
      // }
      
    } else {
      res.status(401).json({message: "Unauthorized"})
    }

   


    next();
    
  } catch (error) {
    console.log(error);
    res.status(401).json({ messsage: 'Cannot Parse Token. Please Log to your respective account.' });
  }
}


module.exports = auth;