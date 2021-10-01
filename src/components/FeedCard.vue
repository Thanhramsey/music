<template>
  <v-col cols="12" :md="size === 2 ? 6 : size === 3 ? 4 : undefined">
    <v-dialog v-model="dialog" max-width="60%" @keydown.esc="cancel">
      <v-card>
        <v-img :src="pic" alt="" contain />
      </v-card>
    </v-dialog>

    <base-card
      :height="value.prominent ? 450 : 350"
      dark
	  class="card-info"
	  data-aos='flip-left'
    >
      <v-img
        :src="require(`@/assets/articles/${value.hero}`)"
        height="100%"
        @click="openPic(require(`@/assets/articles/${value.hero}`))"
      >
        <v-row class="text-right ma-0">
          <v-chip
            label
            class="mx-0 mb-2 text-uppercase"
            color="grey darken-3"
            text-color="white"
            small
            @click.stop=""
          >
            {{ value.category }}
          </v-chip>
        </v-row>
        <v-row class="text-right ma-0" v-if="value.type !=''">
          <v-chip
            label
            class="mx-0 mb-2 text-uppercase"
            color="grey darken-3"
            text-color="white"
            small
            @click.stop=""
          >
            {{ value.type }}
          </v-chip>
        </v-row>
        <v-row class="text-right ma-0">
          <v-chip
            label
            class="mx-0 mb-2 text-uppercase"
            color="grey darken-3"
            text-color="white"
            small
            @click.stop=""
          >
            {{ value.title }}
          </v-chip>
        </v-row>
        <v-row class="text-right ma-0">
          <v-chip
            class="text-uppercase ma-0"
            color="primary"
            label
            small
            @click.stop=""
          >
            {{ value.giaVnd }}
          </v-chip>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script>
export default {
  name: "FeedCard",
  data: () => ({
    pic: "",
    dialog: false,
  }),
  methods: {
    openPic(image) {
      this.dialog = true;
      this.pic = image;
    },
    cancel() {
      this.dialog = false;
    },
  },

  props: {
    size: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
.v-image__image {
  transition: all 1s ease-out;
}
.font-weight-bold.mb-2 {
  color: #000000;
}
.card-info{
	border: 5px groove #bbbbbb !important;
	/* border-radius: 9px */
}
.card-info .v-responsive.v-image{
	padding: 12px;
}
</style>
