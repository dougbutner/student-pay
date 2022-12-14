// --- Get auth token needed to check Quiz results --- \\
/*/ --- Example Use --- \\
const token = AuthTeacher()
axios.post(url, {
}, {
  headers: {
    'Authorization': `Basic ${token}` 
  }
})
/*/
import axios from 'axios';
async function authTeacher(school_domain_endpoint) {
  try {
    const credentials = {
      username: process.env.WP_ADMIN_EMAIL,
      password: process.env.WP_ADMIN_PASSWORD
    }
    const headers = {
      "Content-Type": "application/json"
    }
    const getToken = await axios.post(`${school_domain_endpoint}/jwt-auth/v1/token`,
      credentials,
      headers);
      
      console.log("getToken", getToken);
      console.log("getToken", getToken.data.token);
    return getToken.data.token
    

  } catch (error) {
    //return console.log('error', error)
  }
}

export { authTeacher }
