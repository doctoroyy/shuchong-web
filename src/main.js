import Vue from 'vue'
import index from './pages'
import axios from 'axios'

Vue.prototype.$axios = axios
axios.baseUrl = 'https://localhost:8000'

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
