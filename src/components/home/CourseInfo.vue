<template>
  <v-card  elevation="8" class="pa-5" :data-aos='dataAos' data-aos-offset="400" data-aos-duration="400">
    <v-row>
      <v-col lg="12" align="center">
		   <v-btn
			class="ma-2"
			x-large
			dark
			fab
			color="#de3139"
			>
			<v-icon>{{ icon }}</v-icon>
			</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12"  align="center" class="course-name"> {{ courseName }} </v-col>
    </v-row>
    <v-row>
      <v-col lg="12" class="thong-tin-con"> {{ courseInfo }} </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CourseInfo",
  props: {
    icon: "",
    courseName: "",
    courseInfo: "",
	dataAos:""
  },
};
</script>
<style>
.icon-course.fa.fa.fa.fa-music{
	font-size: 80px;
}
</style>
