import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios';
import auth from "./auth";

Vue.use(VueAxios, axios)

axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    // eslint-disable-next-line no-console
    console.log('unauthorized, logging out ...')
    auth.logout()
    router.replace('/login')
  }
  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
