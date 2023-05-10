const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static('public'));
module.exports = server;