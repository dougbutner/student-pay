const { parentPort } = require('worker_threads');


const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


// --- Custom Classes --- \\
const Bagman = require('../bagman.js');
const Chipper = require('../chipper.js');

// --- Security --- \\
require('dotenv').config();

// --- Get API --- \\
const https = require('https');
const axios = require('axios').default;

// --- Magic Happens --- \\
