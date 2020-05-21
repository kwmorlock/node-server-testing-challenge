// const knex = require("knex");

const knex = require('knex')('development')

const knexfile = require("../knexfile");
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexfile[environment]);
