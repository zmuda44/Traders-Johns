const router = require('express').Router();
const apiRoutes = require('./api');
const euroRoute = require('./euros/euroRoute')
const checkoutRoute = require('./checkout/checkoutRoute')
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/euros', euroRoute);
router.use('/checkout', checkoutRoute);

module.exports = router;