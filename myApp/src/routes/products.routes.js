// modules
const router = require('express').Router();

// controller
const { products } = require('../controllers');

// routing
router.get('/products', products.get);

router.post('/products', products.create);

router.put('/products', products.edit);

router.delete('/products', products.delete);


module.exports = router;