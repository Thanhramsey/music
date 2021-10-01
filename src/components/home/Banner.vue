<template>
<v-container>
  <v-carousel height="450" :cycle="true" interval="1500">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</v-container>
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