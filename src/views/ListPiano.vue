<template>
  <div id="listProduct">
    <articles :articles="products" :category="category">
      <!-- <banner /> -->
    </articles>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'ListProduct',
	data: () => ({
      category:"piano",
    }),
	computed: {
      ...mapState(['products'])
    },

    components: {
		Articles: () => import('@/components/home/Articles'),
    },
  }
</script>
