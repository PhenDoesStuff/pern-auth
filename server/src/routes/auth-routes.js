const { Router } = require('express');
const { userAuth } = require('../middlewares/auth-middleware');
const {
	validationMiddleware,
} = require('../middlewares/validation-middleware');

// Route Imports
const {
	getUsers,
	register,
	login,
	protected,
} = require('../controllers/auth-controllers');

// Validation Imports
const {
	registerValidation,
	loginValidation,
} = require('../validators/auth-validation');

const router = Router();

router.get('/get-users', getUsers);
router.get('/protected', userAuth, protected);
router.post('/register', registerValidation, validationMiddleware, register);
router.post('/login', loginValidation, validationMiddleware, login);

module.exports = router;
