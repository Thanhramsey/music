<template>
  <div id="home">
    <articles :articles="articles">
      <banner />
    </articles>

  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'Home',
	computed: {
      ...mapState(['articles']),
    },

    components: {
	  Banner: () => import('@/components/home/Banner'),
	  Articles: () => import('@/components/home/Articles'),
    },
  }
</script>
