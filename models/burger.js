'use strict';

const orm = require(`../config/orm`);

const burger = {
    selectAllBurgers: () => orm.selectAll(),
    addBurger: name => orm.insertOne(name, false),
    eatBurger: name => orm.updateOne(name, true)
};

module.exports = burger;

// (async() => {
//     console.table(await burger.selectAllBurgers());
//     console.log(await burger.addBurger(`Royale with Cheese`));
//     console.table(await burger.selectAllBurgers());
//     console.log(await burger.eatBurger(`Royale with Cheese`));
//     console.table(await burger.selectAllBurgers());
// })();