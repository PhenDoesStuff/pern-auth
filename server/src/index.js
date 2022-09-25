const express = require('express');
const app = express();
const { PORT } = require('./constants');
const cookieParser = require('cookie-parser');

// Initialize Middlewars
app.use(express.json());
app.use(cookieParser());

// Import Routes
const authRoutes = require('./routes/auth-routes');

// Initialize Routes
app.use('/api', authRoutes);

// app start
const appStart = () => {
	try {
		app.listen(PORT, () => {
			console.log(`The app is running at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

appStart();
