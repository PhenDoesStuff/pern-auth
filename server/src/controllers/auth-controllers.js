const db = require('../db');
const { hash } = require('bcryptjs');

exports.getUsers = async (req, res) => {
	let rows;
	try {
		rows = await db.query('SELECT user_id, email, created_at FROM users');
	} catch (error) {
		console.log(error.message);
	}
	res.status(200).json({ users: rows.rows });
};

exports.register = async (req, res) => {
	const { email, password } = req.body;
	try {
		const hashedPassword = await hash(password, 10);
		await db.query('INSERT INTO users(email, password) VALUES($1, $2)', [
			email,
			hashedPassword,
		]);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
	res.status(201).json({
		success: true,
		message: 'Your account has successfully been created.',
	});
};
