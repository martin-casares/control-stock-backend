const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: { type: String, required: true },
		price: { type: Number, min: 1 },
		stock: { type: Number, required: true },
		image: { type: Array, default: [] },
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},
	},
	{ timestamps: {} }
);

module.exports = mongoose.model('Product', productSchema);
