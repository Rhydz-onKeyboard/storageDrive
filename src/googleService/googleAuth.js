const { google } = require('googleapis');
require('dotenv').config();

const scopes = [
  'https://www.googleapis.com/auth/drive'
];
const auth = new google.auth.JWT(
  process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes
);

const drive = google.drive({ version: "v3", auth });

module.exports = drive