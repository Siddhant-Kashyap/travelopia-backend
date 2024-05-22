const jwt = require('jsonwebtoken');

const JWT_SECRET = 'itsmysecret';


exports.login = (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'admin' && password === 'admin') {
    
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
}