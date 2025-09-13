const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Sunseehray Tirazona']
    res.send('Sunseehray Tirazona');
});

router.use('/users', require('./users'));

module.exports = router;