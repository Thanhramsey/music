<template>
  <v-app-bar
    app
    flat
	class="menu-bar"
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

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
		offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
				class="hidden-sm-and-down"
				text
				v-bind="attrs"
				v-on="on"
				>
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
		<v-menu
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
		</v-menu>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapGetters(['links']),
	  ...mapGetters(['appBars']),
    },
	data: () => ({
      items: [
        { title: 'Đàn piano',action: 'listPiano' },
        { title: 'Đàn guitar',action: 'listGuitar' },
        { title: 'Đàn organ',action: 'listOrgan' },
        { title: 'Các nhạc cụ khác',action:'other' },
      ],
	  khoaHocs: [
        { title: 'Khóa học piano',action: 'listPiano' },
        { title: 'Khóa học guitar',action: 'listGuitar' },
        { title: 'Khóa học organ',action: 'listOrgan' },
        { title: 'Khóa học nhạc cụ khác',action:'other' },
      ],
    }),

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },

	  menuActionClick(action) {
		if (action === "listPiano") {
			this.$router.push({ name: 'listPiano' }).catch(err=> {});
		} else if (action === "listGuitar") {
			this.$router.push({ name: 'listGuitar' }).catch(err=> {});
		}else if (action === "listOrgan") {
			this.$router.push({ name: 'listProduct'}).catch(err=> {});
		}else if (action === "other") {
			this.$router.push({ name: 'listProduct'}).catch(err=> {});
		}
      }
    },
  }
</script>

<style>
.menu-sp .theme--light.v-list {
    background: #cbaa5c !important;
}
.menu-sp .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #000000 !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet.menu-bar {
    background-color: #272727;
}
.menu-bar .theme--light.v-btn {
    color: #ffffff;
}
</style>