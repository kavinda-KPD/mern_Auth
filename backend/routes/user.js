const express = require('express');

// controller functions
const { signupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// loging Route
// router.post('/login', () => {});
router.post('/login', loginUser);

// signup Route
// router.post('/signup', () => {});
router.post('/signup', signupUser);

module.exports = router;
