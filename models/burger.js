'use strict';

const orm = require(`../config/orm`);

const burger = {
    selectAllBurgers: () => orm.selectAll(),
    addBurger: name => orm.insertOne(name, false),
    eatBurger: name => orm.updateOne(name, true)
};

module.exports = burger;