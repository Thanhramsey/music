<template>
  <v-col cols="12" :md="size === 2 ? 4 : size === 3 ? 3 : undefined">
    <v-dialog v-model="dialog" max-width="60%" @keydown.esc="cancel">
      <v-card>
        <v-row>
          <v-col cols="12" lg="6">
            <v-img :src="pic" alt="" contain />
          </v-col>
          <v-col cols="12" lg="6">
            <v-row class="text-right pl-5 pr-5 pt-5">
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
            <v-row class="text-right pl-5 pr-5" v-if="value.type != ''">
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
            <v-row class="text-right pl-5 pr-5">
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
            <v-row class="text-right pl-5 pr-5">
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
			<v-row class="text-right mt-5 pl-5 pr-5">
              <span class="thong-tin-con" style="text-align:left">
				  Nội dung này xin phép được cập nhật sau . Nhiều quá không biết add gì vô đây cả keke ^.^<br>
				  Nội dung này xin phép được cập nhật sau . Nhiều quá không biết add gì vô đây cả keke ^.^<br>
				  Nội dung này xin phép được cập nhật sau . Nhiều quá không biết add gì vô đây cả keke ^.^
			  </span>
            </v-row>
			<v-row class="text-right mt-5 pl-5 pr-5">
              <v-btn color="blue-grey" class="white--text" @click="addItem(value.id)">Thêm vào giỏ hàng</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <base-card
      :height="value.prominent ? 450 : 350"
      dark
      class="card-info"
      data-aos="fade-right"
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
        <v-row class="text-right ma-0" v-if="value.type != ''">
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
	addItem(id) {
      this.$store.dispatch("addItem", id);
    }
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
.card-info {
  border: 5px groove #bbbbbb !important;
  /* border-radius: 9px */
}
.card-info .v-responsive.v-image {
  padding: 12px;
}
</style>
