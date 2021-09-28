import Vue from 'vue'
import BaseBtn from '@/components/base/Btn'
import BaseCard from '@/components/base/Card'
import BaseSubheading from '@/components/base/Subheading'
import * as VueAos from 'vue-aos'
Vue.use(VueAos)
Vue.component(BaseBtn.name, BaseBtn)
Vue.component(BaseCard.name, BaseCard)
Vue.component(BaseSubheading.name, BaseSubheading)
