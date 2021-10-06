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
        href: '/music',
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
        href: 'listOrgan',
      },
	  {
        text: 'Khác',
        href: 'listOther',
      },
    ],
	appBars: [
		{
		  text: 'Trang chủ',
		  href: '/music',
		},
		{
		  text: 'About us',
		  href: '#about',
		},
	],
	StoreCart: [],
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
	StoreCart: (state) => state.StoreCart,
	products: (state) => state.products,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
	ADD_Item(state, id) {
		state.StoreCart.push(id);
	},
	REMOVE_Item(state, index) {
		state.StoreCart.splice(index, 1);
	},
	RESET_Item(state) {
		state.StoreCart = [];
	},
  },
  actions: {
	addItem(context, id) {
		context.commit("ADD_Item", id);
	},
	removeItem(context, index) {
		context.commit("REMOVE_Item", index);
	},
	thanhToan(context){
		context.commit("RESET_Item");
	}
  },
})
