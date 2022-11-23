const path = require('path');
const ms = require('ms');
const dayjs = require('dayjs');
const Bree = require('bree');
const express = require('express');
const app = express();

require('dotenv').config();

const bree = new Bree({
  jobs: [
    
    // --- Status Log for Teacher --- \\
    {
      name: 'api-test.mjs',
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
