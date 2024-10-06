const router = require('express').Router();
const { Product, User, Category } = require('../../models');



// router.post('/', withAuth, async (req, res) => {

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
      const newProduct = await Product.create({ ...req.body });
    
  
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(400).json(err);
    }

});

//Get route for when button is pressed on hompage, only show that category on this page
router.get('/:category_id', async (req,res) => {
  try {
      let products = await Product.findAll({ where: {category_id: req.params.category_id}, 
        include: [{ 
          model: Category,
          attributes: ['category_name'],
        }]
      })
      products = products.map(product => product.get({plain:true }));
      console.log(products);
      res.render('homepage', { products })
  } catch (error){
      res.status(500).json(err);
  }
})



module.exports = router;

