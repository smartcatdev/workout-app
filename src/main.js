import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Axios from 'axios'
import Settings from './config'

Vue.config.productionTip = false;

Vue.prototype.$http = Axios
const token = localStorage.getItem(Settings.TOKEN_ID)
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
