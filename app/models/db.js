const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.ROOT,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
//open mysql connection
connection.connect(error=>{
    if(error) throw error;
    console.log("Database has been successfully connected");
});
module.exports = connection;