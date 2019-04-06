import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './style.scss'

Vue.config.productionTip = false

// 3rd Party Libraries
import Toasted from 'vue-toasted';
Vue.use(Toasted);

// @ts-ignore
import VueThermometer from 'vuejs-thermometer';
Vue.use(VueThermometer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
