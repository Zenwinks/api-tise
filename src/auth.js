import axios from 'axios';

// eslint-disable-next-line no-undef
const auth0 = new Auth0({
  domain: 'zenwinks.eu.auth0.com',
  clientID: 'MINEju1nTwOar4BqkzUzI5NdJyPk7u8T',
  responseType: 'token',
  callbackURL: window.location.origin + '/'
})

// checkAuth
let checkAuth = () => {
  return !!localStorage.getItem('id_token');
}

// login
let login = (username, password) => {
  auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
      scope: 'openid email'
    },
    function (err) {
      if (err) alert('something went wrong: ' + err.message)
    })
}

// logout
let logout = () => {
  localStorage.removeItem('id_token')
  localStorage.removeItem('profile')
}

// set auth header on start up if token is present
if (localStorage.getItem('id_token')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
}

// requireAuth
let requireAuth = (to, from, next) => {
  if (!checkAuth()) {
    // eslint-disable-next-line no-console
    console.log('auth failed ...')
    let path = '/login'
    let result = auth0.parseHash(window.location.hash)
    if (result && result.idToken) {
      // set token in local storage
      localStorage.setItem('id_token', result.idToken)
      // redirect to home page
      path = '/'

      // set auth headers
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

      // get user profile data
      auth0.getProfile(result.idToken, function (err, profile) {
        if (err) {
          // handle error
          alert(err)
        }
        let user = JSON.stringify(profile)
        localStorage.setItem('profile', user)
      })
    }
    next({
      path: path
    })
  } else {
    next()
  }
}

export default {
  checkAuth,
  login,
  logout,
  requireAuth
}
