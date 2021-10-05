import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import ListPiano from '../views/ListPiano.vue'
import ListGuitar from '../views/ListGuitar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
	{
		path: '/music',
		name: 'home',
		component: Home,
	  },
	{
		path: '/listPiano',
		name: 'listPiano',
		component: ListPiano,
	},
	{
		path: '/listGuitar',
		name: 'listGuitar',
		component: ListGuitar,
	},
  ],
})
