# NEAR Learn 2 Earn Tools 🍏

## Compatibility ✅
- Wordpress 
- Learndash 3.5+
- NEAR blockchain

## Quick Start 🛠

Run `npm install` from the main directory the terminal

Set options in `teacher-settings.js`

Duplicate + modify a [bree job](https://github.com/breejs/bree) starting from `template.mjs` to fit your needs, and test. 

Then, uncomment schedules from `server.js` to fit your needs and 

Run `npm start` or `node server.js` to start the script. [Bree](https://www.npmjs.com/package/bree) will keep it running in the background according to the schedules set up in `server.js`.

# Payment Schedule 💸

Adjust when you pay students in `node server.js`. By default, submitted quizzes are checked every 5 minutes, and xtra credit is active.

## Payment Options

Choose how to reward students in `teacher-settings.js`

## Student Requirements 👩‍🎓

Students each need a NEAR address and a Wordpress login to a Learndash school.

> More LMS integrations coming soon

To allow anyone online to join your Wordpress Learndash school and earn rewards on NEAR blockchain, use our frontend solution built for METABUILD III on [tetra.earth](https://tetra.earth).

Or, manually enter each student in `teacher-settings.js` to ensure only approved students are able to earn rewards.

```js

// --- Implementing a Manual Student List --- \\

const students = [ // "wordpress_account_name":"wallet.near"
  "douglas":"godsol.near",
  "sonny":"sonnylife.near"
];

```

## Extra Credit

Give your students extra credit by points earned during a day, week, month, year, or all of these in tandem.

Try different options in [Teacher Settings](teacher-settings.js) and further modify the equations on the individual payments directly in `/jobs`

```js
{
  name: 'daily-xtr-credit',
  interval: 'at 2:00 pm' // Everyday
},
```

# Demo as a Student on [Tetra.earth](https://tetra.earth/learn2earn)
Using [AQUA Token on Testnet](https://explorer.testnet.near.org/transactions/CieWtmTgRjuJkpLgB4pNx26jbTjbDBUndqcBJE4UFvyL) 

## Passwords for quizzes
Perma design - permaperfect
Bio-regeneration - natureknowsbest

## Free plugins
You can set up a L2E system using completely free plugins.
Learn how to [get your user's Near account into Wordpress the free and easy web 2.0 way](https://www.youtube.com/watch?v=-fHRpTUnQRM), and explore closed- and IRL-school focused manual input options in [teacher-settings.js](teacher-settings.js). 


> ✨ This repo uses [FRESH Commenting Syntax](https://github.com/dougbutner/FRESH)

> WARNING
> This code isn't (yet) intended to be used on mainnet
> Use at your own risk with real tokens
