'use strict';

// Dependencies
const express = require(`express`);
const exphbs = require(`express-handlebars`);
const router = require(`./controllers/burgers_controller`);
const path = require(`path`);

// Server Configuration
const server = express();
const PORT = process.env.PORT || 8080;
server.use(express.static(path.join(__dirname, `/public`)));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(router);

// Handlebars Configuration
server.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
server.set(`view engine`, `handlebars`);

// Listen for requests
server.listen(PORT, () => console.log(`Server listening at localhost:${PORT}`));