<template>
  <div id="listGuitar">
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
    <articles :articles="guitars" :category="category">
      <!-- <banner /> -->
    </articles>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListGuitar",
  data: () => ({
    category: "guitar",
    loader: null,
    loading3: false,
    guitars: "",
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
        text: "Acoustic",
        value: "acoustic",
      },
      {
        text: "Classic",
        value: "classic",
      },
    ],
    hangDans: [
      {
        text: "Hãng đàn",
        value: "",
      },
      {
        text: "Takamine",
        value: "takamine",
      },
      {
        text: "Tanglewood",
        value: "tanglewood",
      },
      {
        text: "Yamaha",
        value: "yamaha",
      },
      {
        text: "Fender",
        value: "fender",
      },
      {
        text: "Taylor",
        value: "taylor",
      },
      {
        text: "Cordoba",
        value: "cordoba",
      },
    ],
  }),
  computed: {
    ...mapState(["products"]),
  },
  created: function () {
    this.guitars = this.products.filter((x) => x.category == "guitar");
  },

  components: {
    Articles: () => import("@/components/home/Articles"),
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 500);
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
        this.guitars = this.products.filter((x) => x.category == "guitar");
      } else {
        if (
          this.loaiDan != "" &&
          this.hangDan != "" &&
          this.giaTu != 0 &&
          this.den != 0
        ) {
          this.guitars = this.products.filter(
            (x) =>
              x.label == this.hangDan &&
              x.type == this.loaiDan &&
              parseInt(x.gia) > this.giaTu &&
              parseInt(x.gia) < this.den
          );
        } else {
          this.guitars = this.products;
          if (this.loaiDan != "") {
            this.guitars = this.guitars.filter((x) => x.type == this.loaiDan);
          }
          if (this.hangDan != "") {
            this.guitars = this.guitars.filter((x) => x.label == this.hangDan);
          }
          if (this.giaTu != 0) {
            this.guitars = this.guitars.filter(
              (x) => parseInt(x.gia) > this.giaTu
            );
          }
          if (this.den != 0) {
            this.guitars = this.guitars.filter(
              (x) => parseInt(x.gia) < this.den
            );
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  position: relative;
  padding: 10px 20px;
  background: #white;
  font-size: 16px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;
  &:after,
  &:before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 1s;
  }
  &:after {
    top: -1px;
    left: -1px;
    border-top: 3px solid #607d8b;
    border-left: 3px solid #607d8b;
  }
  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 3px solid #607d8b;
    border-right: 3px solid #607d8b;
  }
  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background:rgba(255, 214, 120, 0.51);
    // color:white;
    &:before,
    &:after {
      width: 100%;
      height: 100%;
    //   border-color:white;
    }
  }
}
</style>
