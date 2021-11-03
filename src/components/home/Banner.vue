<template>
  <v-carousel height="450" :cycle="false" interval="2500" :show-arrows="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
	   name: 'HomeBanner',
    data () {
      return {
        items: [
          {
            src: require('@/assets/articles/bakery/carousel(2).jpg'),
          },
          {
            src: require('@/assets/articles/bakery/carousel(1).jpg'),
          },
          {
            src: require('@/assets/articles/bakery/carousel(3).jpg'),
          },
          {
            src: require('@/assets/articles/bakery/carousel(4).jpg'),
          },
        ],
      }
    },
  }
</script>