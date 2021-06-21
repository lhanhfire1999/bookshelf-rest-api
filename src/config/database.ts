const config = {
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'postgres',
    password : '123',
    database : 'master-data',
    port: 5432,
    charset  : 'utf8'
  }
}

export const knex = require("knex")(config);
export const bookshelf = require("bookshelf")(knex);
