const db = require('../db');

exports.getUsers = async (req, res) => {
	let rows;
	try {
		rows = await db.query('select * from users');
		console.log(response);
	} catch (error) {
		console.log(error.message);
	}
	res.status(200).json({ response: rows.rows });
};

exports.register = async (req, res) => {
	try {
		console.log('Valdiation past');
	} catch (error) {
		console.log(error.message);
	}
};
