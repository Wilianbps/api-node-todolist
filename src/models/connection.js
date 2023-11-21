import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
/* Pode ser usado tanto o
createPool ou createConncetion para criar uma fila de conexão.
*/

console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DB);

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

export default connection;
