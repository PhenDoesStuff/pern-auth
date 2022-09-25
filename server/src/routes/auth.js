const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	return res.send('This is working.');
});

module.exports = router;
