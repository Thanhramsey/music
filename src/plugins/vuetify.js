import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
	dark:false,
    themes: {
      light: {
        primary: '#CBAA5C',
        secondary: '#083759',
      },
    },
  },
  icons: {
    iconfont: 'fa4',
  },
})
