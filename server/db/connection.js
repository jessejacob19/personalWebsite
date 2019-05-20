const knex = require("knex");
const config = require("../../knexfile");

// Work out what environment we are in e.g. development
const environment = process.env.NODE_ENV || "development";

// connect to the database using the environmnet-specific
connection = knex(config[environment]);

module.exports = connection;
