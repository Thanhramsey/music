import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import ListPiano from '../views/ListPiano.vue'
import ListGuitar from '../views/ListGuitar.vue'
import ListOrgan from '../views/ListOrgan.vue'
import hoTroKhGt from '../views/hoTroKhGt.vue'
import hoTroKhP from '../views/hoTroKhP.vue'
import OffenQuestion from '../views/OffenQuestion.vue'
import userLogin from '../views/UserLogin.vue'
import userRegister from '../views/UserRegister.vue'
import thanhToan from '../views/ThanhToan.vue'

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
	{
		path: '/listOrgan',
		name: 'listOrgan',
		component: ListOrgan,
	},
	{
		path: '/hoTroKhGt',
		name: 'hoTroKhGt',
		component: hoTroKhGt,
	},
	{
		path: '/hoTroKhP',
		name: 'hoTroKhP',
		component: hoTroKhP,
	},
	{
		path: '/offenQuestion',
		name: 'offenQuestion',
		component: OffenQuestion,
	},
	{
		path: '/userLogin',
		name: 'userLogin',
		component: userLogin,
	},
	{
		path: '/userRegister',
		name: 'userRegister',
		component: userRegister,
	},
	{
		path: '/thanhToan',
		name: 'thanhToan',
		component: thanhToan,
	},
  ],
})
