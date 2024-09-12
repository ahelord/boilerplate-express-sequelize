require('dotenv').config();

module.exports = {
	'development': {
		'username': process.env.POSTGRES_USER,
		'password': process.env.POSTGRES_PASSWORD,
		'database': process.env.POSTGRES_DB,
		'host': process.env.POSTGRES_HOST,
		'port':process.env.POSTGRES_PORT,
		'dialect': 'postgres',
		'migrationStorage': 'sequelize',
		'migrationStorageTableName': 'sequelize_migrations',
		'seederStorage': 'sequelize',
		'seederStorageTableName': 'sequelize_seeders',		
	},
	'test': {
		'username': process.env.POSTGRES_USER,
		'password': process.env.POSTGRES_PASSWORD,
		'database': process.env.POSTGRES_DB,
		'host': process.env.POSTGRES_HOST,
		'port':process.env.POSTGRES_PORT,
		'dialect': 'postgres',
		'migrationStorage': 'sequelize',
		'migrationStorageTableName': 'sequelize_migrations',
		'seederStorage': 'sequelize',
		'seederStorageTableName': 'sequelize_seeders'
	},
	'production': {
		'username': process.env.POSTGRES_USER,
		'password': process.env.POSTGRES_PASSWORD,
		'database': process.env.POSTGRES_DB,
		'host': process.env.POSTGRES_HOST,
		'port':process.env.POSTGRES_PORT,
		'dialect': 'postgres',
		'migrationStorage': 'sequelize',
		'migrationStorageTableName': 'sequelize_migrations',
		'seederStorage': 'sequelize',
		'seederStorageTableName': 'sequelize_seeders'
	}
};
