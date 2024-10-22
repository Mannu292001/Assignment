// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ndhsjeifuzaep211656jhjcuhf';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;