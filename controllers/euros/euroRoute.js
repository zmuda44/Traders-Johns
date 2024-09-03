const router = require('express').Router();
const { Product, User, Category } = require('../../models');
const { Convert } = require("easy-currencies");

//Route and converter to convert USD to euros
const convertCurrency = async (price) => {
    try {
        // Assuming you have a function Convert() that performs currency conversion
        const convertedPrice = await Convert(price).from("USD").to("EUR");
        return Math.round(convertedPrice);
    } catch (error) {
        console.error("Error converting currency:", error);
        throw error;
    }
};

router.get('/', async (req, res) => {

    try {
        const productData = await Product.findAll({
            include: [{
                model: Category,
                attributes: ['category_name'],
            }] // Include the Category model to fetch associated categories
        });

        const productPromises = productData.map(async (product) => {
            const convertedPrice = await convertCurrency(product.price);
            return {
                ...product.get({ plain: true }),
                convertedPrice
            };
        });

        const products = await Promise.all(productPromises);
       

        res.render('euros-homepage', { products, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/category/:category_id', async (req,res) => {
    try {
        let productData = await Product.findAll({ where: {category_id: req.params.category_id},
        include: [{ 
            model: Category,
            attributes: ['category_name'],
          }]
        });
        const productPromises = productData.map(async (product) => {
            const convertedPrice = await convertCurrency(product.price);
            return {
                ...product.get({ plain: true }),
                convertedPrice
            };
        });

        const products = await Promise.all(productPromises);       

        res.render('euros-homepage', { products, logged_in: req.session.logged_in });
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router