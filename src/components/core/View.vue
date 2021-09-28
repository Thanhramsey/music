<template>
  <v-content id="home">
	<keep-alive>
    	<router-view />
	</keep-alive>
	<about />
    <subscribe />
  </v-content>
</template>

<script>
  export default {
    name: 'CoreView',
	components: {
      About: () => import('@/components/home/About'),
      Subscribe: () => import('@/components/home/Subscribe'),
    },
  }
</script>
