import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log("NODE_ENV vaut :" + process.env.NODE_ENV);
/* passer en debug pour voir le contenu de process.env */
console.log("process.env vaut :" + process.env);