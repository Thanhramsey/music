import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import AOS from "aos";
import "aos/dist/aos.css";
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    AOS.init({  });  },
}).$mount('#app')

