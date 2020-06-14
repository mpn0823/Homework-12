'use strict';

const express = require(`express`);
const burger = require(`../models/burger`);

const router = express.Router();

router.get(`/`, async(_, res) => {
    const burgers = await burger.selectAllBurgers();
    res.render(`index`, { burgers });
});

router.post(`/api/add-burger/`, async(req, res) => {
    res.json(await burger.addBurger(req.body.name));
});

router.post(`/api/eat-burger/`, async(req, res) => {
    res.json(await burger.eatBurger(req.body.name));
});

module.exports = router;