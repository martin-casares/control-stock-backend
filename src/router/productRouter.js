const { Router } = require('express');

const {
	getProducts,
	createProduct,
	deleteProduct,
	updateProduct,
	getProductsByCategory,
} = require('../controllers/productsControllers');

const router = Router();

router.get('/products', getProducts);

router.post('/product-add', createProduct);

router.put('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

router.get('/products/category/:categoryId', getProductsByCategory);

module.exports = router;
