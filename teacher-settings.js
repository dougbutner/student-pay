// === TEACHER SETTINGS === \\

const existing_studentlist = true; //Set for demo, default is false
const studentlist_type = "students"; // 

// --- Unit per correct answer --- \\
const correct_pay = 1;

// --- Unit per incorrect answer --- \\
const incorrect_pay = 0;

// --- Unit per quiz started --- \\
const start_pay = 0;

// --- Unit per quiz finished --- \\
const finish_pay = 0;

// --- Set to "private_key" or "browser" for payment authentication pathways --- \\
const teacher_key_type = "private_key"; //REMIND Add PK in .env or in terminal as TEACHER_KEY={private key holding payment token}


/*/ About Leatndash + NEAR integration

Collecting Student's NEAR accounts manually or via automatic Email integration 
1. Manually imput the username and the near account of the student
2. Allow the student to set their NEAR account name upon registration
 - This allows you to set up payments before a student gets a NEAR account

/*/

/*/ --- Manual Static Student List --- \\ 

  Requires student has NEAR testnet account
  Doesn't require collecting NEAR account name on registration 

/*/
const students = { // "wordpress_account_name":"wallet.near"
  "douglas":"godsol.near",
  "sonny":"sonnylife.near",
  "gudasol":"gudasol.near"
};

/*/ --- Automatic Static Student List --- \\ 

  If you have school emails for students already, 
  you may set up payments manually before the students register 
  on Wordpress. 
  Students input NEAR account name on signup

/*/
const students_email = [
  "dougbutner@gmail.com", "ammonthewind@gmail.com"
]
