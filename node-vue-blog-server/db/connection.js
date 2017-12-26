const mysql = require('mysql');
const config = require('./../config/mysql')
const logger = require('./../utils/logger').system();

const connection = mysql.createConnection(config);

connection.connect();



connection.on('error', function(err) {
    logger.info(err.code); // 'ER_BAD_DB_ERROR'
});

module.exports = connection;
