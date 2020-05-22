// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";

require("dotenv").config();

module.exports = {

  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },


  // testing: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./data/test.db3",
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./data/migrations",
  //   },
  //   seeds: {
  //     directory: "./data/seeds",
  //   },
  // },


};

//only need production and staging if hosting to horoku
