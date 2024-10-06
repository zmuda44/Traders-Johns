const router = require('express').Router();
const { Product, User, Category } = require('../models');
const withAuth = require('../utils/auth');



//Get route to homepage
router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            include: [{
                model: Category,
                attributes: ['category_name'],
            }] // Include the Category model to fetch associated categories
        });

        const products = productData.map((product) => product.get({ plain: true }));
        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Product }],
          });

        const user = userData.get({ plain: true });

        res.render('homepage', { user, products, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get route to login page
router.get('/login', (req, res) => {
    res.render('login', {logged_in: req.session.logged_in});
})

//Get route to profile page
router.get('/profile', withAuth, async (req, res) => {
    try {        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Product }],
          });
        const productData = await Product.findAll(
            {
                include: [{
                    model: Category,
                    attributes: ['category_name'],
                }] // Include the Category model to fetch associated categories
            }
        );
        const user = userData.get({ plain: true });
        const products = productData.map((product) => product.get({ plain: true }));

        const userProducts = products.filter(product => product.user_id === req.session.user_id)
        console.log("user products", userProducts)

        res.render('profile', { ...user, products, userProducts, logged_in: req.session.logged_in });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//Get route to category page when clicking button on homepage
router.get('/category/:category_id', async (req,res) =>{
    try {
        let products = await Product.findAll({ where: {category_id: req.params.category_id},
        include: [{ 
            model: Category,
            attributes: ['category_name'],
          }]
        });
        products = products.map(product => product.get({plain:true }));
        res.render('homepage', {products})
    }catch (error){
        res.status(500).json(err);
    }
  })

module.exports = router;
