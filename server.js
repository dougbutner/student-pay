//const path = require('path');
import * as path from 'path';
//const ms = require('ms');
import * as ms from 'ms';
//const dayjs = require('dayjs');
import * as dayjs from 'dayjs'
import Bree from 'bree';

//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();



const bree = new Bree({
  jobs: [
    
    // --- Status Log for Teacher --- \\
    {
      name: 'api-test.js',
      timeout: 0
    },
    /*/ --- Quiz Completion Drops --- \\
    {
      name: 'student-pay-near.mjs',
      interval: '5m'
    },

    // --- Student Engagement Awards - Extra Credit --- \\
    {
      name: 'daily-xtr-credit.mjs',
      interval: 'at 2:00 pm' // Everyday
    },
    { 
      name: 'weekly-xtr-credit.mjs',
      cron: '30 3 * * 7' // Mondays at 7:30 AM 
    },
    { 
      name: 'monthly-xtr-credit.mjs',
      cron: '24 7 1 * *' // At 7:24 AM on first of each month
    },
    { 
      name: 'yearly-xtr-credit.mjs',
      cron: '0 1 1 1 *' // At 01:00 AM on Jan 1
    },
    /*/

  ]
});


// === Start the Rewards === \\
bree.start();
console.log("Student Pay Launched");

bree.on('worker created', (name) => {
  console.log('Task Started ', name);
});

bree.on('worker deleted', (name) => {
  console.log('Task Ended ', name);
});


/*/

app.get('/', (req, res) => {
  res.send('Hello There')
});
/*/
