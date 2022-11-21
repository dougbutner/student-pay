
/*/
This concept was temporarily abandoned, but can be finished and added back when needed

/*/

import { KeyPairEd25519, KeyPair, keyStores, connections } from near-api-js;





const fs = require("fs");
const path = require("path");
const homedir = require("os").homedir();

require('teacher-settings.js');

// === Handle authentication for Teachers === \\
class Teacher {
  constructor(account_id, auth_type = teacher_key_type){ // Pass in setting for key authentication type
    this.auth_type = auth_type;
    this.account_id = false; 
    
  }
  

  


// === === \\ 

/*/
Add in any login key pair pathway, see near-app-js/utils/key_pair
/*/

if (this.auth_type = "browser"){
  /*/
  Consideration:
  Using in-browser signing means a teacher must be present to authenticate payment
  Was not implemented in this example, but can be. 

  const account = await nearConnection.account(this.account_id);
  await account.getAccessKeys();

  ex:
  async getCredentials(batch) {}
  /*/
}
else
if (this.auth_type = "private_key"){
  const TEACHER_KEY = process.env.TEACHER_KEY;
  setKey(this.account_id)
}
 const teacher = {
   "account_id":"teacher.aquatoken.testnet",
   "public_key":"ed25519:3ZEdy5SAFXZEVSj6L5WxELLZKKNRHsjTJbAC7acywBxe",
   "private_key":"ed25519:4riuaibYPqw2FqUWW5H9UWX9xPS8UUZUgVmCyBFF5bXBQ7y4xSj1g81Ww9gGv3X5gMvPpwDXzix6q6GEtSqoVwGN"
 }
 
    setKey(networkId: "testnet", accountId: string, keyPair: KeyPair): Promise<void>;
    
    


}


module.exports = Teacher;
