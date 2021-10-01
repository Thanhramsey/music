<template>
  <v-card  elevation="8" :data-aos='dataAos' data-aos-offset="400" data-aos-duration="400">
	  <v-row>
      <v-col lg="12" align="center pb-0">
		   <v-img :src="require(`@/assets/articles/course/${src}`)"
		max-height="180"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12"  align="center" class="group-name pt-0"> {{ courseName }} </v-col>
    </v-row>

  </v-card>
</template>

<script>
export default {
  name: "CourseGroup",
  props: {
    src: "",
	courseName:"",
	dataAos:""
  },
};
</script>
<style>
.group-name{
	color: #252525;
	font-family: "ui-monospace";
	font-weight: 700;
	font-size: 20px;
}
</style>
