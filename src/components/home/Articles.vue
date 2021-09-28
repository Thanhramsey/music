<template>
  <section id="feed">
    <feed :articles="articles" :category="category">
      <slot />
    </feed>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout',
	props: {
		articles: {
		type: Array
		},
		category: {
			type: String
		}
	},
    components: {
      Feed: () => import('@/components/Feed'),
    },
  }
</script>
