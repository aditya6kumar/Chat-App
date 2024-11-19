import jwt from "jsonwebtoken";
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1]; // Get token from cookie or header
  
  if (!token) {
    return res.status(401).json({ message: 'User not authenticated.' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }
    
    req.userId = decoded.userId; // Store user data in request object
    next();
  });
};
export default isAuthenticated;

const req = {
    id:"",
}
req.id = "sdlbgnjdfn"