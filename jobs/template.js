import parentPort from 'worker_threads'
// --- Security --- \\
import * as dotenv from 'dotenv'

// --- Get API --- \\
import https from 'https';
import axios from 'axios';

// --- Set up WP Teacher login + Learn 2 Earn Payment Options --- \\ 
import { authTeacher } from '../teacher-auth.js';
import * as settings from "../teacher-settings.js";

// --- Near Javascript API --- \\
//import { KeyPairEd25519, KeyPair, keyStores, connections } from near-api-js;
import * as nearAPI from "near-api-js";

const { keyStores, KeyPair, connect, KeyPairEd25519, connections } = nearAPI;

// --- Set up WP Teacher login + Learn 2 Earn Payment Options --- \\ 
//import AuthTeacher from ""../teacher-auth.mjs';   


// --- Implementation using envitonment vatiables TODO web flow --- \\ 
const myKeyStore = new keyStores.InMemoryKeyStore();
const keyPair = KeyPair.fromString(process.env.PRIVATE_KEY);
// adds the keyPair you created to keyStore

(async () => {
	return await myKeyStore.setKey("testnet", "teacher.aquatoken.testnet", keyPair);
})();

// --- Connect to NEAR Api --- \\
const connectionConfig = {
  networkId: "testnet",
  keyStore: myKeyStore, // first create a key store 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};


const nearConnection = (async () => {
	return await connect(connectionConfig);
})();


// --- Get teacher authentication token --- \\
const teacher_token = AuthTeacher();

const teacher_jwt = `Basic ${teacher_token}`;

const headers_auth = {
  "Content-Type": "application/json",
  'Authorization': teacher_jwt
};

/*/ --- Learndash Api Endpoints Setup --- \\
Example of Quiz Statitics endpoint 
Docs: https://developers.learndash.com/rest-api/v2/v2-quiz-statistics/
/*/
const quiz_wp_url = `${Settings.school_domain}/ldlms/v2/sfwd-quiz`;
const quiz_stats_url = `${Settings.school_domain}/ldlms/v2/sfwd-quiz/1965/statistics`; //TODO finish this 

function make_quiz_stats_url(quiz_id){
  return `${Settings.school_domain}/ldlms/v2/sfwd-quiz/${quiz_id}/statistics`;
}

const quiz_stats_params = {
  headers:headers_auth,
  id:"1965",
}

const quiz_list_params = {
  headers:headers_auth
}


// --- Get the List of Quizzes --- \\
async function getQuizList(url, params) {
  try{
    return await axios.get (
      url,
      params
    );
  } catch (err => { console.log(err)})
}//END getQuizList()

// --- Get the Stats of one Quiz --- \\
async function getQuizStats(url, params) {
  try{
    return await axios.get(
      url, 
      params
    );
    } catch (err => { console.log(err)});
}//END getQuizStats()





/*/
// --- Starting Point --- \\
Promise.all([getQuizList(quiz_wp_url, quiz_list_params)]) // Extensible to multiple data inputs
  .then(function (results) {
    const all_quizes = results[0]; //TODO Find array of int/string quiz ids HINT look at endpoint to find real location
    
    let quiz_list = [];
    
    //Filter through excluded_quizes
    
    //Filter through included_quizes

    // --- Filter Quiz Results for Desired IDs --- \\
    
    //WARN be sure that there's not a implicitly linked quiz that is included again from API
    
    // Get students that have earned points via correct answers
    for (var i=0, n=quiz_list.length; i < n; ++i){
      Promise.all([getQuizStats(quiz_id)]) // Extensible to multiple data inputs
        .then(function (results) {
          const quiz_stats = results[0];
          // Loop through to get desired students to pay 
          for (var i=0, n=quiz_list.length; i < n; ++i){
            // Implement mechanics to get amount according to your chosen payment method
            sendStudentPay("example account.testnet", 0000000000000001)
            
          }

        });
    }
  });//END Promise.all 
  
  /*/
  
async function sendStudentPay(student_to_pay = false, amount = 0000000000000000) {
  if (student_to_pay !! amount > 0){
    let outcome = await wallet.callMethod({ 
      contractId: 'aquatoken.testnet', 
      method: 'transfer_from', 
      args: { "aquatoken.testnet", 
      owner_id: `${Settings.teacher_near_account}`, 
      new_owner_id: student_to_pay, 
      amount: amount } 
    });
  }
}



/*/ reference

transfer_from(&mut self, owner_id: AccountId, new_owner_id: AccountId, amount: U128) {
  sendStudentPay();

  async function sendStudentPay() {
      const near = await connect({ ...config, keyStore });
      const account = await near.account(CONTRACT_NAME);
      const newArgs = { staking_pool_whitelist_account_id: WHITELIST_ACCOUNT_ID };
      const result = await account.signAndSendTransaction({
          receiverId: CONTRACT_NAME,
          actions: [
              transactions.transfer_from(
                  "new",
                  Buffer.from(JSON.stringify(newArgs)),
                  10000000000000,
                  "0"
              ),
          ],
      });

      console.log(result);
  }

/*/
// === Runaway Jobs Bree Cleanup === \\
function cancel() {
  clearTimeout(); 
  // send a message to the parent that we're ready to terminate
  // (you could do `process.exit(0)` or `process.exit(1)` instead if desired
  // but this is a bit of a cleaner approach for worker termination
  if (parentPort) parentPort.postMessage('cancelled');
  else process.exit(0);
}
