<template>
  <div id="listOrgan">
    <v-container>
      <v-row>
        <v-col cols="12" lg="3">
          <v-select
            :items="hangDans"
            label="Hãng đàn"
            dense
            solo
            outlined
            v-model="hangDan"
          ></v-select>
        </v-col>
        <v-col cols="12" lg="3">
          <v-select
            :items="loaiDans"
            label="Loại đàn"
            dense
            solo
            outlined
            v-model="loaiDan"
          ></v-select>
        </v-col>
        <v-col cols="12" lg="2">
          <v-text-field
            label="Gía Từ"
            single-line
            outlined
            solo
            dense
            type="number"
            v-model="giaTu"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="2">
          <v-text-field
            label="Đến"
            single-line
            outlined
            solo
            dense
            type="number"
            v-model="den"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="2">
          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="blue-grey"
            class="mt-0 ma-2 white--text"
            @click="timKiem"
          >
            Tìm Kiếm
            <v-icon right dark> mdi-cached </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="list-icon neons">
      <v-row>
        <v-col cols="12" lg="6">
          <v-icon color="#607d8b" large> fa fa-gift </v-icon>
          <span class="ml-2 btn"
            >Miễn phí toàn quốc cho đơn hàng từ 4.000.000Vnđ</span
          >
        </v-col>
        <v-col cols="12" lg="6">
          <v-icon color="#607d8b" large> fa fa-truck </v-icon>
          <span class="ml-2 btn"
            >Tặng bộ phụ kiện hấp dẫn khi mua đàn và bảo hành trọn đời</span
          >
        </v-col>
      </v-row>
    </v-container>
    <articles :articles="organs" :category="category">
      <!-- <banner /> -->
    </articles>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListOrgan",
  data: () => ({
    category: "organ",
    loader: null,
    loading3: false,
    organs: "",
    loaiDan: "",
    hangDan: "",
    giaTu: 0,
    den: 0,
    loaiDans: [
      {
        text: "Loại đàn",
        value: "",
      },
      {
        text: "Organ điện",
        value: "",
      },
    ],
    hangDans: [
      {
        text: "Hãng đàn",
        value: "",
      },
      {
        text: "Casio",
        value: "Casio",
      },
      {
        text: "Roland",
        value: "roland",
      },
    ],
  }),
  computed: {
    ...mapState(["products"]),
  },
  created: function () {
    this.organs = this.products.products.organ;
  },

  components: {
    Articles: () => import("@/components/home/Articles"),
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 1000);
      this.loader = null;
    },
  },
  methods: {
    timKiem() {
      this.loader = "loading3";
      if (
        this.hangDan == "" &&
        this.loaiDan == "" &&
        this.giaTu == 0 &&
        this.den == 0
      ) {
        this.organs = this.products.filter((x) => x.category == "organ");
      } else {
        if (
          this.loaiDan != "" &&
          this.hangDan != "" &&
          this.giaTu != 0 &&
          this.den != 0
        ) {
          this.organs = this.products.filter(
            (x) =>
              x.label == this.hangDan &&
              x.type == this.loaiDan &&
              parseInt(x.gia) > this.giaTu &&
              parseInt(x.gia) < this.den
          );
        } else {
          this.organs = this.products;
          if (this.loaiDan != "") {
            this.organs = this.organs.filter((x) => x.type == this.loaiDan);
          }
          if (this.hangDan != "") {
            this.organs = this.organs.filter((x) => x.label == this.hangDan);
          }
          if (this.giaTu != 0) {
            this.organs = this.organs.filter(
              (x) => parseInt(x.gia) > this.giaTu
            );
          }
          if (this.den != 0) {
            this.organs = this.organs.filter((x) => parseInt(x.gia) < this.den);
          }
        }
      }
    },
  },
};
</script>