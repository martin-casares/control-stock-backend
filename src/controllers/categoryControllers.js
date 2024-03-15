const Category = require('../models/categoryModel');

const getCategories = async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createCategory = async (req, res) => {
	try {
		const { name, description } = req.body;

		const newCategory = new Category({
			name,
			description,
		});

		const savedCategory = await newCategory.save();
		res.status(200).json(savedCategory);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateCategory = async (req, res) => {
	try {
		const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!category)
			return res.status(400).json({ message: 'No existe una categoria con ese ID' });

		res
			.status(200)
			.json({ message: 'Categoria actualizado correctamente.', category });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteCategory = async (req, res) => {
	try {
		const categoryDelete = await Category.findById(req.params.id);
		if (categoryDelete == undefined) {
			return res
				.status(400)
				.json({ message: 'No existe ningúna categoria con ese ID.' });
		}

		await Category.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Categoria Eliminada!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
module.exports = { getCategories, createCategory, deleteCategory, updateCategory };
