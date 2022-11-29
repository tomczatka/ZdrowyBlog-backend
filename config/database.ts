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
  return{
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'ec2-34-241-90-235.eu-west-1.compute.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'da6pqednktuiig'),
        user: env('DATABASE_USERNAME', 'itvdkaugckkqef'),
        password: env('DATABASE_PASSWORD', 'e1d7e10cfafaf62900656bb79ac12a0a41d62c1586fc9b60265175dca85e8bb3'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  }
 
};
