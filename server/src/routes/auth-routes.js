const { Router } = require('express');
const { validationMiddleware } = require('../middlewares/auth-middleware');

// Route Imports
const {
	getUsers,
	register,
	login,
} = require('../controllers/auth-controllers');

// Validation Imports
const {
	registerValidation,
	loginValidation,
} = require('../validators/auth-validation');

const router = Router();

router.get('/get-users', getUsers);
router.post('/register', registerValidation, validationMiddleware, register);
router.post('/login', loginValidation, validationMiddleware, login);

module.exports = router;
