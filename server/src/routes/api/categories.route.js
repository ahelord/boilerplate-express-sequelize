const express = require('express');
const categoriesController = require('../../controllers/categories.controller');
const router = express.Router();

/**
 * @swagger
 * path:
 *  /categories/:
 *    get:
 *      summary: Get category
 *      tags: [categories]
 *      responses:
 *        "200":
 *          description: A category schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/category'
 */
router
	.route('/')
	.get( categoriesController.findAll);

module.exports = router;
