let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/sample-db' : 'postgres://localhost/sample-db'
let { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = process.env

const dockerConnectionString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
  
  module.exports = {
    development: {
        client: 'pg',
        connection: dockerConnectionString,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  