// === TEACHER SETTINGS === \\

export const existing_studentlist = true; //Set for demo, default is false
export const studentlist_type = "students"; // 
export const school_domain = "https://tetra.earth/wp-json"; // API-base according to your WP routing. Do not include ending "/"
export const teacher_near_account = "teacher.aquatoken.near"; 

export const excluded_quizes = [];

export const included_quizes = [];


// --- Unit per correct answer --- \\
export const correct_pay = 1;

// --- Unit per incorrect answer --- \\
export const incorrect_pay = 0;

// --- Unit per quiz started --- \\
export const start_pay = 0;

// --- Unit per quiz finished --- \\
export const finish_pay = 0;

// --- Set to "private_key" or "browser" for payment authentication pathways --- \\
export const teacher_key_type = "private_key"; //REMIND Add PK in .env or in terminal as TEACHER_KEY={private key holding payment token}


// --- Choose to pay some or all quizzes --- \\

let paying_quizzes = []; // Pays all, else use ["<courseid>"] 

/*/ About Learndash + NEAR integration

Collecting Student's NEAR accounts manually or via automatic Email integration 
1. Manually imput the username and the near account of the student
2. Allow the student to set their NEAR account name upon registration
 - This allows you to set up payments before a student gets a NEAR account

/*/

/*/ --- Manual Static Student List --- \\ 

  Requires student has NEAR testnet account
  Doesn't require collecting NEAR account name on registration 

/*/
export const students = { // "wordpress_account_name":"wallet.near"
  "douglas":"godsol.near",
  "sonny":"sonnylife.near",
  "gudasol":"gudasol.near"
};

/*/ --- Automatic Static Student List --- \\ 

  If you have school emails for students already, 
  you may set up payments manually before the students register 
  on Wordpress. 
  Students input NEAR account name on signup


export const students_email = {
  "dougbutner@gmail.com", "ammonthewind@gmail.com"
};

/*/
