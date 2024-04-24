require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE

});

module.exports = {pool};