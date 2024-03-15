const Product = require('../models/productModel.js');

const getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createProduct = async (req, res) => {
	try {
		const { name, description, price, stock, image } = req.body;

		const newProduct = new Product({
			name,
			description,
			price,
			stock,
			image,
		});

		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!product)
			return res.status(400).json({ message: 'No existe un producto con ese ID' });

		res
			.status(200)
			.json({ message: 'Producto actualizado correctamente.', product });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteProduct = async (req, res) => {
	try {
		const productDelete = await Product.findById(req.params.id);
		if (productDelete == undefined) {
			return res
				.status(400)
				.json({ message: 'No existe ningún usuario con ese ID.' });
		}

		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Producto Eliminado!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getProducts,
	createProduct,
	deleteProduct,
	updateProduct,
};
