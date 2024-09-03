const router = require('express').Router();
const { Product, User, Category } = require('../../models');

//Get route for checkout page when clicking on individual item
router.get('/:product_id', async (req, res) => {
    try {
        let productData = await Product.findByPk(req.params.product_id, {
            include: [{ model: User, attributes: ['username'] }]
        })
        
        let product = productData.get({ plain: true });
        res.render('checkout', product)
    }
    catch (error) {
        res.status(500).json(err);
    }
})


module.exports = router