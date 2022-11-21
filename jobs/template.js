const { parentPort } = require('worker_threads');

// --- Security --- \\
require('dotenv').config();

// --- Get API --- \\
const https = require('https');
const axios = require('axios').default;

// --- Set up Teacher --- \\
require('../teacher-settings.js'); // Bring in settings
require('../teacher-auth.js'); // Activates AuthTeacher()


// --- Learn 2 Earn Varibles --- \\


// --- Get teacher authentication token --- \\
const auth_wp_url = `${school_domain}/wp-json/jwt-auth/v1/token`;
const teacher_token = AuthTeacher();
axios.post(url, {
}, {
  headers: {
    'Authorization': `Basic ${teacher_token}` 
  }
})


const promStudents = new Promise((resolve, reject) => {
  // --- Get the Quizzes --- \\
  let quiz_get_url = `${school_domain}/wp-json/ldlms/v2/sfwd-quiz`;

  axios({
    method: 'get',
    url:quiz_get_url,
  //  data:data,
    headers:{
      'Authorization': `Basic ${teacher_token}` 
    }
  })
    .then(function (response) {

      console.log("response", response);
/*/
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
              
              /*/
              resolve(response);
    }).catch(function (error) {
      // handle error
      console.log(error);
    });//END axios final

});//END Promise promStudents


  
 // --- Prepare Txs with eligible people list --- \\ 
promPeeps.then((peeps) =>{

let batch = [];

/*/
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

/*/


        
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
