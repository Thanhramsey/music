<template>
  <v-row>
    <v-col lg="4">
      <v-card
        elevation="8"
        class="pa-5 pt-1 card-feedback"
      >
        <v-row>
          <v-col lg="12" align="left">
            <v-btn class="ma-2" small dark fab color="#de3139">
              <v-icon>{{ icon1 }}</v-icon>
            </v-btn>
			<span class="course-name">{{ name1 }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="12" class="thong-tin-con" align="left">
            {{ feedBack1 }}
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col lg="4">
      <v-card
        elevation="8"
        class="pa-5 pt-1 card-feedback"
      >
        <v-row>
          <v-col lg="12" align="left">
            <v-btn class="ma-2" small dark fab color="#de3139">
              <v-icon>{{ icon2 }}</v-icon>
            </v-btn>
			<span class="course-name">{{ name2 }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="12" class="thong-tin-con" align="left">
            {{ feedBack2 }}
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col lg="4">
      <v-card
        elevation="8"
        class="pa-5 pt-1 card-feedback"
      >
        <v-row>
          <v-col lg="12" align="left">
            <v-btn class="ma-2" small dark fab color="#de3139">
              <v-icon>{{ icon3 }}</v-icon>
            </v-btn>
			<span class="course-name">{{ name3 }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="12" class="thong-tin-con" align="left">
            {{ feedBack3 }}
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FeedBack",
  props: {
    icon1: "",
    name1: "",
    feedBack1: "",
    icon2: "",
    name2: "",
    feedBack2: "",
    icon3: "",
    name3: "",
    feedBack3: "",
  },
};
</script>
<style>
.icon-course.fa.fa.fa.fa-music {
  font-size: 80px;
}
.course-name {
  font-family: "serif";
  font-weight: 700;
  font-size: 20px;
}
.theme--light .course-name{
	color: #252525;
}
.theme--dark .course-name{
	color: darkgrey;
}
.card-feedback.pa-5.v-card.v-sheet{
	max-height: 180px;
	height:175px
}
.theme--light .card-feedback.pa-5.v-card.v-sheet{
	background-color: #ffffff;
}
.theme--dark .card-feedback.pa-5.v-card.v-sheet{
	background-color: #1e1e1e;
	max-height: 180px;
	height:175px
}
</style>
