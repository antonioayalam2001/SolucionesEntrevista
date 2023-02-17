require('dotenv').config();

const mariadb = require('mariadb');
const pool = mariadb.createPool({host: process.env.DB_HOST, user: process.env.DB_USER, password:process.env.DB_PASSWORD,database:"prueba" ,connectionLimit: 5});

const dbConnection = async ()=> {
      try {
            await pool.getConnection();
            console.log('Connection Succeeded')
      }catch (e) {
            console.log(e)
            console.log('Something happened')
      }
}

module.exports = {
      dbConnection,pool
}