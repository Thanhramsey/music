import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import AOS from "aos";
import "aos/dist/aos.css";
import VueFbCustomerChat from 'vue-fb-customer-chat'
Vue.use(VueFbCustomerChat, {
	page_id: 102731695520330,
	theme_color: '#2c3e50',
	locale: 'en_US'
  })
//   102731695520330
// 562547237566000
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    AOS.init({  });  },
}).$mount('#app')

