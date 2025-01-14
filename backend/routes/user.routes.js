const express = require('express');
const { createUser, getUsers, getUserById, deleteUser } = require('../controllers/userController.js');
const { authenticateUser } = require('../middlewares/auth.js');
const router = express.Router();

router.post('/', createUser); // Create a new user
router.get('/', authenticateUser, getUsers); // Get all users
router.get('/:id', authenticateUser, getUserById); // Get a specific user by ID
router.delete('/:id', authenticateUser, deleteUser); // Delete a user

module.exports = router;
