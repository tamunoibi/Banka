import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// const config = {
//   development: process.env.DEVELOPMENT_URL,
//   test: process.env.TEST_URL,
//   production: process.env.PRODUCTION_URL,
// };
// const env = process.env.NODE_ENV;

// const pool = new Pool({
//   connectionString: config[env],
// });
// const connect = process.env.TESTSTRING;
const connect = process.env.DEVELOPSTRING;

const pool = new Pool({
  connectionString: connect,
});

pool.on('connect', () => {
  console.log('connected to the db');
});

export default pool;
