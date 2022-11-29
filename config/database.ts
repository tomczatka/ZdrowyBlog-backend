const parse = require('pg-connection-string').parse

export default ({ env }) => {

  // if(env('NODE_ENV') === 'production') {
  //   const config = parse(process.env.DATABASE_URL)
  //   return {
  //     connection: {
  //       client: 'postgres',
  //       connection: {
  //         host: config.host,
  //         port: config.port,
  //         database: config.database,
  //         user: config.user,
  //         password: config.password,
  //         ssl: false,
  //       },
  //     },
  //   }
  // }
  // return{
  //   connection: {
  //     client: 'postgres',
  //     connection: {
  //       host: env('DATABASE_HOST', '127.0.0.1'),
  //       port: env.int('DATABASE_PORT', 5432),
  //       database: env('DATABASE_NAME', 'ZdrowyBlog'),
  //       user: env('DATABASE_USERNAME', 'postgres'),
  //       password: env('DATABASE_PASSWORD', 'tomek77'),
  //       ssl: env.bool('DATABASE_SSL', false),
  //     },
  //   },
  // }
  const config = parse(process.env.DATABASE_URL)
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: false,
      },
    },
  }
};
