const express = require('express');
const path = require('path')
const cors = require('cors');
const fileUpload = require('express-fileupload');


const server = express();
server.use(cors());
server.use(fileUpload({
  limits: { fileSize: 5000000 },
  abortOnLimit: true,
  debug: false,
  responseOnLimit: "El peso del archivo que intentas subir supera el limite permitido",
}))
server.use('/', express.static(path.join(process.cwd(), 'src/public')))
server.use(express.json());
module.exports = server;