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
	giaTu:0,
	den:0,
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
        text: "Yamaha",
        value: "yamaha",
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
      setTimeout(() => (this[l] = false), 1000);
      this.loader = null;
    },
  },
  methods: {
    timKiem() {
      this.loader = "loading3";
      if (this.hangDan == "" && this.loaiDan == "" && this.giaTu == 0 && this.den== 0) {
        this.guitars = this.products.filter((x) => x.category == "guitar");
      } else {
        if (this.loaiDan != "" && this.hangDan != "" && this.giaTu != 0 && this.den != 0) {
          this.guitars = this.products.filter(
            (x) => x.label == this.hangDan && x.type == this.loaiDan && parseInt(x.gia) > this.giaTu && parseInt(x.gia) < this.den
          );
        }else{
			this.guitars = this.products;
			if (this.loaiDan != "") {
				this.guitars = this.guitars.filter((x) => x.type == this.loaiDan);
			}
			if (this.hangDan != "") {
				this.guitars = this.guitars.filter((x) => x.label == this.hangDan);
			}
			if (this.giaTu != 0) {
				this.guitars = this.guitars.filter((x) => parseInt(x.gia) > this.giaTu);
			}
			if(this.den != 0){
				this.guitars = this.guitars.filter((x) => parseInt(x.gia) < this.den);
			}
		}
      }
    },
  },
};
</script>

<style >
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.container.list-icon i{
	color: #607d8b;
}

.neons span {
  font-size: 14px;
  text-align: center;
   font-weight: bold;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
     from {
      color: #fff;
    text-shadow: 0 0 10px #a200ff, 0 0 20px #a200ff, 0 0 30px #a200ff, 0 0 40px #a200ff, 0 0 50px #a200ff, 0 0 60px #a200ff, 0 0 70px #a200ff, 0 0 90px #a200ff;
  }

  to {
     color: gray;
    text-shadow: 0 0 20px #a200ff, 0 0 30px #a200ff, 0 0 40px #a200ff, 0 0 50px #a200ff, 0 0 60px #a200ff, 0 0 70px #a200ff, 0 0 80px #a200ff, 0 1 90px #a200ff;
  }
}
</style>
