<template>
  <v-navigation-drawer v-model="drawer" app dark temporary ref="myNavDrawer">
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        @click="menuActionClick(link.href)"
      >
        <v-list-item-title v-text="link.text" />
      </v-list-item>
      <v-list-item>
        <v-switch
          class="ma-0"
          v-model="$vuetify.theme.dark"
          color="orange"
          hide-details
          append-icon="fa fa-moon-o"
        ></v-switch>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CoreDrawer",

  computed: {
    ...mapGetters(["links"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },

  methods: {
    ...mapMutations(["setDrawer"]),
    menuActionClick(action) {
      this.setDrawer(false);
      if (action === "listPiano") {
        this.$router.push({ name: "listPiano" }).catch((err) => {});
      } else if (action === "listGuitar") {
        this.$router.push({ name: "listGuitar" }).catch((err) => {});
      } else if (action === "listOrgan") {
        this.$router.push({ name: "listOrgan" }).catch((err) => {});
      } else if (action === "hoTroKhGt") {
        this.$router.push({ name: "hoTroKhGt" }).catch((err) => {});
      }else if (action === "hoTroKhP") {
        this.$router.push({ name: "hoTroKhP" }).catch((err) => {});
      }else if (action === "hoTroKhP") {
        this.$router.push({ name: "hoTroKhP" }).catch((err) => {});
      }else if (action === "music") {
        this.$router.push({ name: "home" }).catch((err) => {});
      }
    },
  },
};
</script>
