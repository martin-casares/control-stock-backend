const mongoose = require('mongoose');

const defaultAvatars = {
	user: 'https://openclipart.org/image/800px/247319',

	admin:
		'https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Support-Admin-icon-Graphics-43209390-1-1-580x386.jpg',
};

const userSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		rol: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
		avatar: {
			type: String,
			default: function () {
				return defaultAvatars[this.rol];
			},
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
