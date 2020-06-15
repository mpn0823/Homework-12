'use strict';

const express = require(`express`);
const burger = require(`../models/burger`);

const router = express.Router();

router.get(`/`, async(_, res) => {
    const burgers = await burger.selectAllBurgers();
    res.render(`index`, { burgers });
});

router.post(`/api/add-burger/`, async(req, res) => {
    await burger.addBurger(req.body.name);
    res.sendStatus(200).end();
});

router.post(`/api/eat-burger/`, async(req, res) => {
    await burger.eatBurger(req.body.name);
    res.sendStatus(200).end();
});

module.exports = router;