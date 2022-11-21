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
import * from 'teacher-settings.mjs';
import axios from 'axios';
export default function AuthTeacher() {
  try {
    const credentials = {
      username: process.env.WP_ADMIN_EMAIL,
      password: process.env.WP_ADMIN_PASSWORD
    }
    const headers = {
      "Content-Type": "application/json"
    }
    const getToken = axios.post(`${Settings.school_domain}/jwt-auth/v1/token`,
      credentials,
      headers)
    return getToken.data.token
  } catch (error) {
    return console.log('error', error)
  }
}
