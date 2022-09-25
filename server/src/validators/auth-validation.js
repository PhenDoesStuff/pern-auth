const { check } = require('express-validator');
const db = require('../db');

// Password
const password = check('password')
	.isLength({ min: 6, max: 15 })
	.withMessage('Password has too be between 6 and 15 characters.');

// Email
const email = check('email')
	.isEmail()
	.withMessage('Please enter a valid email address.');

// Check if Email Exists
const emailExists = check('email').custom(async value => {
	const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [
		value,
	]);

	if (rows.length) {
		throw new Error(
			'Email already exists. Please use a unique email address.'
		);
	}
});

module.exports = {
	registerValidation: [email, password, emailExists],
};
