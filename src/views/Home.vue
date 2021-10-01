<template>
  <div id="home">
    <banner :items="header" />
    <info />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["articles"]),
  },
  data() {
    return {
      header: [
        {
          src: require("@/assets/articles/bakery/carousel(2).jpg"),
        },
        {
          src: require("@/assets/articles/bakery/carousel(1).jpg"),
        },
        {
          src: require("@/assets/articles/bakery/carousel(3).jpg"),
        },
        {
          src: require("@/assets/articles/bakery/carousel(4).jpg"),
        },
      ],
    };
  },

  components: {
    Banner: () => import("@/components/home/Banner"),
	info:()=> import("@/components/home/InfomationCourse"),
  },
};
</script>
