<template>
 <v-container>
      <v-row>
        <v-col cols="12" lg="6" data-aos='fade-down-right' data-aos-offset="500" data-aos-duration="500">
          <v-img :src="require(`@/assets/articles/bakery/landing.jpg`)">
          </v-img>
        </v-col>
        <v-col cols="12" lg="6" data-aos='fade-down-left' data-aos-offset="500" data-aos-duration="500">
          <span class="thong-tin">Welcome to Tempo Music!</span>
		  </br>
		  </br>
          <span class="thong-tin-con">
			Chúng tôi là một trung tâm âm nhạc trẻ, chuyên nghiệp. Cam kết mang đến cho bạn các khóa học
            chất lượng về piano, guitar...
			Bắt đầu từ những kiến thức cơ bản nhất và những kiến thức chuyên sâu về âm nhạc.
          </span>
		  </br>
		  </br>
          <span class="thong-tin-con">
            Triết lý cốt lõi của chúng tôi là cách tốt nhất để sinh viên đạt được
            hiểu biết về âm nhạc thông qua các khóa học chất lượng.
            Tất cả các bài học của chúng tôi dành cho học viên với mong muốn giúp học viên có khả năng chơi và biểu diễn nhạc cụ.
          </span>
		  </br>
		  </br>
          <span class="thong-tin-con">
            Là nơi giúp bạn theo đuổi đam mê bên cạnh đó còn là nơi chia sẽ cùng bạn những niềm vui, nỗi buồn trong cuộc sống
          </span>
        </v-col>
      </v-row>
	  <v-row class="mt-3">
		  <v-spacer/>
		  <h1 class="thong-tin">Các khóa học</h1>
		  <v-spacer/>
	  </v-row>
	  <v-row>
		  <v-col cols="12" lg="4">
			  <course-info
				icon="fa fa-music"
				courseName="Basic Course"
				courseInfo="Khóa học mang lại kiến thức cơ bản về nhạc lý, nhạc cụ"
				dataAos='fade-left'
			  ></course-info>
		  </v-col>
		  <v-col cols="12" lg="4">
			  <course-info
				icon="fa fa-star-half-o"
				courseName="Rhythm Course"
				courseInfo="Khóa học giúp bạn nâng cao kỹ năng chơi nhạc cụ một cách chuyên nghiệp"
				dataAos="fade-up"
			  ></course-info>
		  </v-col>
		  <v-col cols="12" lg="4">
			  <course-info
				icon="fa fa-youtube-play"
				courseName="Solo Course"
				courseInfo="Khóa học chuyên về khả năng solo, độc tấu bản nhạc"
				dataAos="fade-right"
			  ></course-info>
		  </v-col>
	  </v-row>
	  <v-row>
		  <v-col cols="12" lg="4">
			  <course-info
				icon="fa fa-snowflake-o"
				courseName="Blues Course"
				courseInfo="Khóa học sẽ giới thiệu cho bạn về blues, một phong cách nhạc rất hay"
				dataAos='fade-left'
			  ></course-info>
		  </v-col>
		  <v-col cols="12" lg="4">
			  <course-info
				icon="fa fa-star-half-o"
				courseName="Jazz Course"
				courseInfo="Khóa học sẽ giới thiệu cho bạn về nhạc Jazz,âm nhạc cho những người lịch lãm"
				dataAos='fade-down'
			  ></course-info>
		  </v-col>
		  <v-col cols="12" lg="4">
			  <course-info
				icon="fa fa-assistive-listening-systems"
				courseName="Live Course"
				courseInfo="Khóa học chuyên về khả năng đào tạo khả năng cảm thụ âm nhạc"
				dataAos='fade-right'
			  ></course-info>
		  </v-col>
	  </v-row>
	  <v-row class="mt-3">
		  <v-spacer/>
		  <v-col lg="6" align="center" data-aos="zoom-in-down" >
		  <h1 class="thong-tin">Guitar Groups</h1>
		  <span class="thong-tin-con">
			  Trường âm nhạc của chúng tôi cung cấp nhiều nhóm khác nhau để học guitar và trau dồi kỹ năng của bạn.
			  Nếu bạn thích các bài học riêng, chúng tôi có những gì để cung cấp cho bạn và con bạn. </span>
		  </v-col>
		  <v-spacer/>
	  </v-row>
	  <v-row>
		  <v-col cols="12" lg="3">
			  <course-group
				src="kid.jpg"
				courseName="Kid class"
				dataAos="fade-up"
			  ></course-group>
		  </v-col>
		  <v-col cols="12" lg="3">
			  <course-group
				src="teen.jpg"
				courseName="Teen class"
				dataAos='fade-down'
			  ></course-group>
		  </v-col>
		  <v-col cols="12" lg="3">
			  <course-group
				src="adult.jpg"
				courseName="Adult class"
				dataAos="fade-up"
			  ></course-group>
		  </v-col>
		  <v-col cols="12" lg="3">
			  <course-group
				src="private.jpg"
				courseName="Private class"
				dataAos='fade-down'
			  ></course-group>
		  </v-col>
	  </v-row>
		 <v-row class="mt-5">
		  <v-spacer/>
		  <h1 class="thong-tin">FeedBack</h1>
		  <v-spacer/>
	  </v-row>
	  <v-row class="mt-3">
		   <v-carousel height="250" class="feedback-carou" :show-arrows="false" :cycle="true" interval="1500" >
			   <v-carousel-item
				v-for="(item, i) in feedBacks"
				:key="i"
				reverse-transition="slide-fade"
				transition="slide-fade">
					<feed-back
					:icon1="item.icon1"
					:name1="item.name1"
					:feedBack1="item.feedback1"
					:icon2="item.icon2"
					:name2="item.name2"
					:feedBack2="item.feedback2"
					:icon3="item.icon3"
					:name3="item.name3"
					:feedBack3="item.feedback3"
					></feed-back>
				</v-carousel-item>
			</v-carousel>
	  </v-row>
    </v-container>
</template>

<script>
export default {
  name: "info",
  components: {
    CourseInfo: () => import("@/components/home/CourseInfo"),
    CourseGroup: () => import("@/components/home/CourseGroup"),
    FeedBack: () => import("@/components/home/FeedBack"),
  },
  data() {
    return {
      feedBacks: [
        {
          icon1: "fa fa-address-card",
          name1: "Giroud",
          feedback1: "Tempo là nơi giúp tôi biết đến Teemo",
          icon2: "fa fa-address-card",
          name2: "Ronaldo",
          feedback2: "Tempo là nơi giúp tôi biết đến Yasuo",
          icon3: "fa fa-address-card",
          name3: "Messi",
          feedback3: "Tempo là nơi giúp tôi biết đến Darius",
          dataAos: "fade-in",
        },
        {
          icon1: "fa fa-address-card",
          name1: "Teemo",
          feedback1: "captain teemo on duty  captain teemo on duty ",
          icon2: "fa fa-address-card",
          name2: "Yasuo",
          feedback2: "Dead is like the wind ,always by my side",
          icon3: "fa fa-address-card",
          name3: "Yone",
          feedback3: "Dead is like the wind ,always by my side",
          dataAos: "fade-in",
        },
        {
          icon1: "fa fa-address-card",
          name1: "Darius",
          feedback1: "captain teemo on duty  captain teemo on duty ",
          icon2: "fa fa-address-card",
          name2: "Sona",
          feedback2: "Dead is like the wind ,always by my side",
          icon3: "fa fa-address-card",
          name3: "Jax",
          feedback3: "Dead is like the wind ,always by my side",
          dataAos: "fade-in",
        },
      ],
    };
  },
};
</script>
<style>
.thong-tin {
  font-family: "serif";
  font-weight: 700;
  font-size: 36px;
}
.theme--dark .thong-tin{
	color: darkgrey;
}
.theme--light .thong-tin{
	color: #252525;
}
.thong-tin-con {
  color: #74757f;
  font-family: "serif";
  font-size: 17px;
  letter-spacing: 0.028em;
}
.feedback-carou .v-carousel__controls {
  height: 45px;
}
</style>
