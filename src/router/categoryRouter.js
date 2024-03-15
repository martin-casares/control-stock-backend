const { Router } = require('express');

const {
	getCategories,
	createCategory,
	deleteCategory,
	updateCategory,
} = require('../controllers/categoryControllers');

const router = Router();

router.get('/categories', getCategories);

router.post('/category-add', createCategory);

router.put('/category/:id', updateCategory);

router.delete('/category/:id', deleteCategory);

module.exports = router;
