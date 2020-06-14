'use strict';

const connection = require(`./connection`);
const util = require(`util`);

const query = util.promisify(connection.query.bind(connection));

const orm = {
    selectAll: () =>
        query(`select * from burgers`),

    insertOne: (str, bool) =>
        query(`insert into burgers(burger_name, devoured) values(?, ?)`, [str, bool]),

    updateOne: (str, bool) =>
        query(`update burgers set devoured = ? where burger_name = ?`, [bool, str])
}

module.exports = orm;