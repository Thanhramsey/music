<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
	ref="myNavDrawer"
  >
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        @click="menuActionClick(link.href)"
      >
        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },

    methods: {
      ...mapMutations(['setDrawer']),
	   menuActionClick(action) {
		this.setDrawer(false)
		if (action === "listPiano") {
			this.$router.push({ name: 'listPiano' }).catch(err=> {});
		} else if (action === "listGuitar") {
			this.$router.push({ name: 'listGuitar' }).catch(err=> {});
		}else if (action === "listOrgan") {
			this.$router.push({ name: 'listProduct'}).catch(err=> {});
		}else if (action === "other") {
			this.$router.push({ name: 'listProduct'}).catch(err=> {});
		}
      },
    },
  }
</script>
