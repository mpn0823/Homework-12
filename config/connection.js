'use strict';

const mysql = require(`mysql`);

const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(err =>
    err ? console.log(`error connection: ${err.stack}`) : console.log(`connected as id ${connection.threadId}`));

module.exports = connection;