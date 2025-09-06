const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello from the routes folder!');
});

module.exports = router;