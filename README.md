# NEAR JavaScript SDK

## Quick Start

Run `npm install` from the main directory the terminal

Enter your private key in `.env`

Set options in `teacher-settings.js`

Run node start to start the script. [Bree](https://www.npmjs.com/package/bree) will keep it running in the background

## Payment Options

Choose how to reward students in `teacher-settings.js`

## Student Requirements

You'll need a NEAR address and a Wordpress login to a Learndash school.

> More LMS integrations coming soon

To allow anyone online to join your Wordpress Learndash school and earn rewards on NEAR blockchain, use our frontend solution built for METABUILD III on [tetra.earth](https://tetra.earth).

Or, manually enter each student in `teacher-settings.js` to ensure only approved students are able to earn rewards.

```js

// --- Implementing a Manual Student List --- \\

const students = [ // "wordpress_account_name":"wallet.near"
  "douglas":"goudasol.near",
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


## Compatibility
- Wordpress 
- Learndash 3.5+
- NEAR blockchain

> WARNING
> This code isn't (yet) intended to be used on mainnet
> Use at your own risk with real tokens
