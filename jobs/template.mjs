import parentPort from 'worker_threads'
// --- Security --- \\
import * as dotenv from 'dotenv'

// --- Get API --- \\
import https from 'https';
import axios from 'axios';

// --- Neat Javascript SDK --- \\
//import { KeyPairEd25519, KeyPair, keyStores, connections } from near-api-js;
import * as nearAPI from near-api-js;


// --- Set up WP Teacher login + Learn 2 Earn Payment Options --- \\
import AuthTeacher from '../teacher-auth.mjs';
import * as Settings from '../teacher-settings.mjs';

// --- Get teacher authentication token --- \\
const teacher_token = AuthTeacher();

const teacher_jwt = `Basic ${teacher_token}`;

const headers_auth = {
  "Content-Type": "application/json",
  'Authorization': teacher_jwt
};

// --- Learndash Api Endpoints Used --- \\
const quiz_stats_url = `${Settings.school_domain}/ldlms/v2/sfwd-quiz/1965/statistics`;
const quiz_wp_url = `${Settings.school_domain}/ldlms/v2/sfwd-quiz`;


// --- Example of Quiz Statitics endpoint --- \\
// Docs: https://developers.learndash.com/rest-api/v2/v2-quiz-statistics/
const quiz_stats_params = {
  headers:headers_auth,
    id:"1965",
}

// --- Get the List of Quizzes --- \\
function getQuizList() {
  try{
    return axios.get (
      quiz_wp_url
    );
  } catch (err => { console.log(err)})
}//END getQuizList()

// --- Get the Stats of one Quiz --- \\
function getQuizStats() {
  try{
    return axios.get(
      quiz_stats_url, 
      quiz_stats_params
    );
    } catch (err => { console.log(err)});
}//END getQuizStats()

// --- Starting Point --- \\
Promise.all([getQuizList()]) // Extensible to multiple data inputs
  .then(function (results) {
    const quiz_list = results[0];
    console.log(results[0]);
  });

/*/ reference
  sendStudentPay();

  async function sendStudentPay() {
      const near = await connect({ ...config, keyStore });
      const account = await near.account(CONTRACT_NAME);
      const newArgs = { staking_pool_whitelist_account_id: WHITELIST_ACCOUNT_ID };
      const result = await account.signAndSendTransaction({
          receiverId: CONTRACT_NAME,
          actions: [
              transactions.deployContract(fs.readFileSync(WASM_PATH)),
              transactions.functionCall(
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
