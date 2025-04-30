const jwt = require('jsonwebtoken');

function verifyUserToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : null;

  if (!token) return res.status(403).send('Token is required');

  console.log('Token:', token);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('JWT Error:', err);
      return res.status(401).send('Unauthorized');
    }
    console.log('Decoded token:', decoded);
    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin;
    next();
  });

}

module.exports = verifyUserToken;