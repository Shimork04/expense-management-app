const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

const authorizeRoles = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access forbidden.' });
    }
    next();
};

module.exports = { authenticateUser, authorizeRoles };
