<template>
  <div id="listPiano">
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
			<v-col cols="12" lg="2">
			</v-col>
			<v-col cols="12" lg="4">
				<v-icon
				large
				>
				fa fa-gift
				</v-icon>
				<span class="ml-2">Miễn phí toàn quốc cho đơn hàng từ 4.000.000Vnđ</span>
			</v-col>
			<v-col cols="12" lg="5">
				<v-icon
				large
				>
				fa fa-truck
				</v-icon>
				<span  class="ml-2">Tặng bộ phụ kiện hấp dẫn khi mua đàn và bảo hành trọn đời</span>
			</v-col>
			<v-col cols="12" lg="1">
			</v-col>
		</v-row>
	</v-container>
    <articles :articles="pianos" :category="category">
      <!-- <banner /> -->
    </articles>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListPiano",
  data: () => ({
    category: "piano",
    loader: null,
    loading3: false,
    pianos: "",
    loaiDan: "",
    hangDan: "",
	giaTu:0,
	den:0,
    loaiDans: [
      {
        text: "Loại đàn",
        value: "",
      },
      {
        text: "Piano cơ",
        value: "pianoC",
      },
      {
        text: "Piano Điện",
        value: "pianoD",
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
      }
    ],
  }),
  computed: {
    ...mapState(["products"]),
  },
  created: function () {
    this.pianos = this.products.filter((x) => x.category == "piano");
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
      if (this.hangDan == "" && this.loaiDan == "" && this.giaTu == 0 && this.den== 0) {
        this.pianos = this.products.filter((x) => x.category == "piano");
      } else {
        if (this.loaiDan != "" && this.hangDan != "" && this.giaTu != 0 && this.den != 0) {
          this.pianos = this.products.filter(
            (x) => x.label == this.hangDan && x.type == this.loaiDan && parseInt(x.gia) > this.giaTu && parseInt(x.gia) < this.den
          );
        }else{
			this.pianos = this.products;
			if (this.loaiDan != "") {
				this.pianos = this.pianos.filter((x) => x.type == this.loaiDan);
			}
			if (this.hangDan != "") {
				this.pianos = this.pianos.filter((x) => x.label == this.hangDan);
			}
			if (this.giaTu != 0) {
				this.pianos = this.pianos.filter((x) => parseInt(x.gia) > this.giaTu);
			}
			if(this.den != 0){
				this.pianos = this.pianos.filter((x) => parseInt(x.gia) < this.den);
			}
		}
      }
    },
  },
};
</script>