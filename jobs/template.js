
const { parentPort } = require('worker_threads');


// --- Custom Classes --- \\
const Bagman = require('../bagman.js');
const Chipper = require('../chipper.js');

// --- Security --- \\
require('dotenv').config();

// --- Get API --- \\
const https = require('https');
const axios = require('axios').default;

// --- Timmy Varibles --- \\
peeps = [];
neededCollectionNum = 6;
templateId = 272347;
chipCount = 1; 

const promPeeps = new Promise((resolve, reject) => {
  
  // --- Get the Holders NFTs from the API --- \\
  let aaurl = 'https://wax.api.atomicassets.io/atomicassets/v1/accounts';//?collection_name=cxcmusicnfts&hide_offers=true&collection_whitelist=cxcmusicnfts&page=1&limit=99&order=desc';
  let aadata = {
    collection_name:"cxcmusicnfts",
    collection_whitelist:"cxcmusicnfts",
    hide_offers:true,
    page:1,
    limit:100,
    order:"asc"
  }
  aaurl="https://wax.api.atomicassets.io/atomicassets/v1/accounts?collection_whitelist=cxcmusicnfts&page=2&limit=100&order=asc"

  axios({
    method: 'get',
    url: aaurl,
    data:aadata
  })
    .then(function (response) {

      console.log("response.data.length", response.data.data.length);

      for (var i=0, n=response.data.data.length; i < n; ++i){ //Loop Through Holders
        let holder = response.data.data[i];
        if (parseInt(holder.assets) >= neededCollectionNum){
          // --- Add the person to the list  --- \\
          peeps.push(
            [
              holder.assets, //0
              holder.account, //1
            ]
          );
        }//END if response != undefined
        else { // Loop is done, as results are descending
          break;
        } //END Else response != undefined
        
      }//END Holder Getter  loop        
              resolve(peeps);
    }).catch(function (error) {
      // handle error
      console.log(error);
    });//END axios final

});//END Promise promPeeps


  
 // --- Prepare Txs with eligible people list --- \\ 
promPeeps.then((peeps) =>{

let batch = [];


peeps.forEach(function (item, index) {
  
  console.log(item[1] + " has "+ item[0] + " NFTs.");
  
  batch.push({
    contract: 'atomicassets',
    action:'mintasset',
    actor: 'currentxchng',
    permission:'assets',
    data: {
    }
  });
});


//console.log("batch", batch);

    
    
    delete len, chipCount, peeps;
        
    return true;
}).catch(err => { console.log(err)});


// === Batch Handlers === \\



// === Bree Schenanigans === \\

function cancel() {
  clearTimeout(); 
  // send a message to the parent that we're ready to terminate
  // (you could do `process.exit(0)` or `process.exit(1)` instead if desired
  // but this is a bit of a cleaner approach for worker termination
  if (parentPort) parentPort.postMessage('cancelled');
  else process.exit(0);

  
}
