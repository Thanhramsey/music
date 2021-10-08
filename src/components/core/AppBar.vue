<template>
  <v-app-bar app flat class="menu-bar">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo_1.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />

        <v-btn
          v-for="(link, i) in appBars"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
        <!-- Menu sp -->
        <v-menu
          bottom
          content-class="menu-sp"
          origin="center center"
          rounded="b-xl"
          transition="fab-transition"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="hidden-sm-and-down" text v-bind="attrs" v-on="on">
              Danh mục sản phẩm
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="menuActionClick(item.action)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- Menu khoa hoc -->
        <!-- <v-menu
		bottom
		content-class="menu-sp"
		origin="center center"
		rounded="b-xl"
		transition="scale-transition"
		offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
				class="hidden-sm-and-down"
				text
				v-bind="attrs"
				v-on="on"
				>
				Danh mục khóa học
				</v-btn>
			</template>

			<v-list>
				<v-list-item
				v-for="(item, i) in khoaHocs"
				:key="i"
				@click="menuActionClick(item.action)"
				>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu> -->

        <!-- ho tro khach hang  -->
        <v-menu
          bottom
          content-class="menu-sp"
          origin="center center"
          rounded="b-xl"
          transition="fab-transition"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="hidden-sm-and-down" text v-bind="attrs" v-on="on">
              Hỗ trợ khách hàng
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in hoTroKhachHang"
              :key="i"
              @click="menuActionClick(item.action)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
		 <v-menu
          bottom
          content-class="menu-sp"
          origin="center center"
          rounded="b-xl"
          transition="fab-transition"
          offset-y
        >
		 <template v-slot:activator="{ on, attrs }">
            <v-btn class="hidden-sm-and-down" text v-bind="attrs" v-on="on">
              Đổi màu giao diện
            </v-btn>
          </template>
		  <v-list>
            <v-list-item
            >
              <v-switch
			  :label="theme"
			  class="ma-0"
              v-model="$vuetify.theme.dark"
              color="orange"
              hide-details
			  append-icon="fa fa-moon-o"
            ></v-switch>
            </v-list-item>
          </v-list>
		</v-menu>
        <v-spacer />
        <v-badge :content="cartCount" :value="cartCount" color="blue" overlap>
          <v-btn small dark fab color="#de3139" @click="openDialogCart">
            <v-icon>fa fa-shopping-cart</v-icon>
          </v-btn>
        </v-badge>
      </v-row>
    </v-container>
    <!-- shopCart -->
    <v-dialog
      v-model="dialog"
      max-width="65%"
      @keydown.esc="cancel"
      height="200px"
	  content-class="cart-dialog"
    >
      <v-card>
        <v-card-title
          class="text-h5 white--text"
          style="background-color: #272727"
        >
          Giỏ hàng
        </v-card-title>
        <v-row v-if="cart.length == 0" class="pa-5">
          <span style="font-family: cursive" class="pa-3"
            >Hiện không tồn tại sản phẩm nào trong giỏ hàng</span
          >
        </v-row>
        <v-row v-if="cart.length != 0" class="pa-5">
          <span style="font-family: cursive" class="pa-3"
            >Giỏ hàng của bạn ({{ cartCount }})</span
          >
        </v-row>
        <v-row v-for="(item, index) in cart" :key="index" class="pa-5">
          <v-col lg="3" sm="3" class="img-cart">
            <v-img
              :src="require(`@/assets/articles/${item.hero}`)"
              height="100px"
              width="100px"
            >
            </v-img>
          </v-col>
          <v-col lg="7" sm="7" class="info-cart">
            <v-row class="text-right ma-0">
              <v-chip
                label
                class="mx-0 mb-2 text-uppercase"
                color="grey darken-3"
                text-color="white"
                small
                @click.stop=""
              >
                {{ item.title }}
              </v-chip>
            </v-row>
            <v-row class="text-right ma-0" v-if="item.type != ''">
              <v-chip
                label
                class="mx-0 mb-2 text-uppercase"
                color="grey darken-3"
                text-color="white"
                small
                @click.stop=""
              >
                {{ item.type }}
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
                {{ item.giaVnd }}
              </v-chip>
            </v-row>
          </v-col>
          <v-col lg="2" sm="3" class="btn-cart">
            <v-btn
              class="ma-2"
              small
              dark
              fab
              color="#de3139"
              @click="removeItem(index)"
            >
              <v-icon>fa fa-trash-o</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="pa-5">
          <v-col lg="5">
            <h4 style="font-family: cursive" class="pa-3">
              Tổng tiền :{{ total.toLocaleString() }} VNĐ
            </h4>
          </v-col>
          <v-spacer />
          <v-col lg="3">
            <v-btn color="blue-grey" class="mt-0 ma-2 white--text" @click="thanhToan">
              Thanh Toán <v-icon right dark> fa fa-money</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- shopCart -->
  </v-app-bar>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CoreAppBar",

  computed: {
    ...mapGetters(["links"]),
    ...mapGetters(["appBars"]),
	theme(){
		if(this.$vuetify.theme.isDark){
			return "Theme tối"
		}else{
			return "Theme sáng"
		}
	},
    products() {
      return this.$store.getters.products;
    },
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
    },
    cart() {
		console.log(this.$store.getters.allProducts);
      return this.StoreCart.map((cartitems) => {
        return this.$store.getters.allProducts.find((itemForSale) => {
          return cartitems === itemForSale.id;
        });
      });
    },
    total() {
      let total = 0;
      this.cart.forEach((element) => {
        total += parseInt(element.gia);
      });
      console.log(total);
      return total;
    },
  },
  watch: {},
  data: () => ({
    shopCartNum: 10,
    dialog: false,
    items: [
      { title: "Đàn piano", action: "listPiano" },
      { title: "Đàn guitar", action: "listGuitar" },
      { title: "Đàn organ", action: "listOrgan" },
    //   { title: "Phụ kiện và nhạc cụ khác", action: "other" },
    ],
    //   khoaHocs: [
    //     { title: 'Khóa học piano',action: 'listPiano' },
    //     { title: 'Khóa học guitar',action: 'listGuitar' },
    //     { title: 'Khóa học organ',action: 'listOrgan' },
    //     { title: 'Khóa học nhạc cụ khác',action:'other' },
    //   ],
    hoTroKhachHang: [
      { title: "Hướng dẫn chọn mua piano", action: "hoTroKhP" },
      { title: "Hướng dẫn chọn mua guitar", action: "hoTroKhGt" },
      { title: "Câu hỏi thường gặp", action: "offenQuestion" },
    ],
  }),

  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href.endsWith("!") ? 0 : item.href);
    },

    menuActionClick(action) {
      if (action === "listPiano") {
        this.$router.push({ name: "listPiano" }).catch((err) => {});
      } else if (action === "listGuitar") {
        this.$router.push({ name: "listGuitar" }).catch((err) => {});
      } else if (action === "listOrgan") {
        this.$router.push({ name: "listOrgan" }).catch((err) => {});
      } else if (action === "other") {
        this.$router.push({ name: "listProduct" }).catch((err) => {});
      }else if (action === "hoTroKhGt") {
        this.$router.push({ name: "hoTroKhGt" }).catch((err) => {});
      }else if (action === "hoTroKhP") {
        this.$router.push({ name: "hoTroKhP" }).catch((err) => {});
      }else if (action === "offenQuestion") {
        this.$router.push({ name: "offenQuestion" }).catch((err) => {});
      }
    },
	thanhToan(){
		this.dialog = false;
		 this.$store.dispatch("thanhToan");
	},
    openDialogCart() {
      this.dialog = true;
    },
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
    },
  },
};
</script>

<style>
.menu-sp .theme--light.v-list {
  background: #cbaa5c !important;
}
.menu-sp
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #000000 !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet.menu-bar {
  background-color: #272727;
}
.menu-bar .theme--light.v-btn {
  color: #ffffff;
}
.v-card__title.text-h5.white--text{
	font-family: cursive;
	height: 80px;
	font-size:1.75rem !important;
}
.v-dialog.v-dialog--active{
overflow-x: hidden;
}
@media only screen and (max-width: 900px) {
  .img-cart {
    flex: 0 0 15% !important;
    padding: 0 !important;
  }
  .img-cart .v-responsive.v-image {
    width: 70px !important;
    height: 70px !important;
  }
  .btn-cart {
    flex: 0 0 15% !important;
    padding: 0 !important;
  }
  .btn-cart .v-btn--fab.v-size--small {
    height: 30px;
    width: 30px;
  }
  .info-cart {
    flex: 0 0 5 0% !important;
    padding: 0 !important;
  }
  .info-cart .v-chip.v-size--small {
    border-radius: 12px;
    font-size: 8px;
    height: 10px;
    padding: 0 6px !important;
  }
  .cart-dialog{
	  max-width:85% !important;
  }
   .detail-dialog{
	  max-width:85% !important;
  }
}
</style>