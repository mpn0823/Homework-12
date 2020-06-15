'use strict';

const connection = require(`./connection`);
const util = require(`util`);

const query = util.promisify(connection.query.bind(connection));

const orm = {
    selectAll: async() =>
        await query(`select * from burgers`),

    insertOne: async(str, bool) =>
        await query(`insert into burgers(burger_name, devoured) values(?, ?)`, [str, bool]),

    updateOne: async(str, bool) =>
        await query(`update burgers set devoured = ? where burger_name = ?`, [bool, str])
}

module.exports = orm;