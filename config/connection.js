'use strict';

const mysql = require(`mysql`);

const connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `password`,
    database: `burgers_db`
});

connection.connect(err =>
    err ? console.log(`error connection: ${err.stack}`) : console.log(`connected as id ${connection.threadId}`));

module.exports = connection;