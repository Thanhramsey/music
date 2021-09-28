<template>
  <div id="listGuitar">
    <articles :articles="products" :category="category">
      <!-- <banner /> -->
    </articles>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'ListGuitar',
	data: () => ({
      category:"guitar",
    }),
	computed: {
      ...mapState(['products'])
    },

    components: {
		Articles: () => import('@/components/home/Articles'),
    },
  }
</script>
