const Category = require('../models').category;
const httpStatus = require('http-status');

exports.findAll = async (req, res, next) => {
	try {
		const categories = await Category.findAll({
			attributes: ['label', 'identifier']
		});
		res.json(categories);
	} catch (error) {
		console.log(error);
		next(httpStatus[httpStatus.INTERNAL_SERVER_ERROR]);
	}
};
