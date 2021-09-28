import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
	products: require('@/data/products.json'),
    drawer: false,
    items: [
      {
        text: 'Trang chủ',
        href: '/',
      },
      {
        text: 'About us',
        href: '#about',
      },
	  {
        text: 'Đàn piano',
        href: 'listPiano',
      },
	  {
        text: 'Đàn guitar',
        href: 'listGuitar',
      },
	  {
        text: 'Đàn Organ',
        href: 'listProduct',
      },
	  {
        text: 'Khác',
        href: 'listProduct',
      },
    ],
	appBars: [
		{
		  text: 'Trang chủ',
		  href: '/',
		},
		{
		  text: 'About us',
		  href: '#about',
		},
	],
  },

  getters: {
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) continue

        const text = article.category

        categories.push({
          text,
          href: '#!',
        })
      }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items;
    },
	appBars: (state, getters) => {
		return state.appBars;
	},
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {

  },
})
