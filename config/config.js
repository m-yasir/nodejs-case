// USING DB_URI to connect to the Database for now
module.exports = {
	development: {
		// username: "",
		// password: "",
		// database: process.env.DATABASE,
		dialect: "postgres",
		host: "127.0.0.1",
		uri: process.env.DB_URI,
		port: 5432
	},
	test: {
		// username: "root",
		// password: null,
		// database: "",
		dialect: "postgres",
		host: "127.0.0.1",
		uri: process.env.DB_URI
	},
	production: {
		// username: "",
		// password: "",
		// database: "",
		host: "",
		uri: process.env.DB_URI,
		dialect: "postgres"
	}
};
