const db = require('../db');
const { hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { SECRET } = require('../constants');

exports.getUsers = async (req, res) => {
	let rows;
	try {
		rows = await db.query('SELECT user_id, email, created_at FROM users');
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
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

exports.login = async (req, res) => {
	const user = req.user;
	const payload = {
		id: user.user_id,
		email: user.email,
	};
	let token;
	try {
		token = await sign(payload, SECRET);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
	return res.status(200).cookie('token', token, { httpOnly: true }).json({
		success: true,
		message: 'Logged in successfully.',
	});
};

exports.protected = async (req, res) => {
	try {
		res.status(200).json({ info: 'Protected Info' });
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};
