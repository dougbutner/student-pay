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
async function AuthTeacher() {
  try {
    const credentials = {
      username: process.env.WP_ADMIN_EMAIL,
      password: process.env.WP_ADMIN_PASSWORD
    }
    const headers = {
      "Content-Type": "application/json"
    }
    const getToken = await axios.post(`${school_domain}/wp-json/jwt-auth/v1/token`,
      credentials,
      headers)
    return getToken.data.token
  } catch (error) {
    return console.log('error', error)
  }
}
