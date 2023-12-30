const jwt = require("jsonwebtoken");
const jwt_key = process.env.JWT_SECRET;



const auth = (req, res, next ) => {
  try {

    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token,jwt_key);
      req.userId = user.id;
      
      if (user.role === 'user') {
        req.userId = user.id;
        req.organizerId = null; // You can set it to null or any default value
      } else if (user.role === 'organizer') {
        req.userId = null; // You can set it to null or any default value
        req.organizerId = user.id;
      }
      
    } else {
      res.status(401).json({message: "Unauthorized"})
    }

    next();
    
  } catch (error) {
    console.log(error);
    res.status(401).json({ messsage: 'Token is invalid' });
  }
}


module.exports = auth;