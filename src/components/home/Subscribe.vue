<template>
  <v-container id="subscribe" tag="section">
    <base-card color="rgba(203, 170, 92, 0.51)" class="pa-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <base-subheading class="mb-3"> Subscribe </base-subheading>

            <p>
              Để lại thông tin của bạn để nhận được những ưu đãi mới nhất từ chúng
              tôi.
            </p>

            <v-row class="pa-2">
              <v-responsive class="overflow-visible mr-2" max-width="400">
                <v-text-field
                  v-model="name"
                  hide-details
                  label="Tên"
                  solo
				  class="mb-2"
                />
				<v-text-field
                  v-model="sdt"
                  hide-details
                  label="SĐT"
                  solo
				   class="mb-2"
                />
				<v-text-field
                  v-model="email"
                  hide-details
                  label="Email"
                  solo
				   class="mb-2"
                />
				<v-btn
                :block="$vuetify.breakpoint.xsOnly"
                class="ma-0"
                color="secondary"
                style="height: 48px"
				@click="sendEmail"
              >
                Subscribe
              </v-btn>
              </v-responsive>
            </v-row>
          </v-col>

          <v-col cols="12" md="6" offset-md="1">
            <base-subheading>Contact</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-email-outline </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>EMAIL</v-list-item-title>

                <v-list-item-subtitle>
                  tempomusic0403@gmail.com
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-map-marker </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>Địa chỉ</v-list-item-title>

                <v-list-item-subtitle>
                  112 Phan Đình Phùng Pleiku, Gia Lai
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-phone </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>Số điện thoại</v-list-item-title>

                <v-list-item-subtitle> 097 919 03 03 </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </base-card>
	<v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 dialog-header">
          Thông báo
        </v-card-title>

        <v-card-text class="dialog-content pa-5">
          Chúng  tôi sẽ liên hệ với bạn trong thời gian sớm nhất mới. Thank you!!!!!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "HomeSubscribe",
  data() {
    return {
		name:"",
    	email: "",
    	sdt: "",
		dialog:false
    };
  },
  methods: {
    sendEmail(e) {
		 this.dialog = true;
      try {
        emailjs.send(
          "service_boyj8t3",
          "template_tl5khig",
          {
            name: this.name,
			email: this.email,
			sdt: this.sdt
          },
		  "user_Bl7H57VKHEw6J37frYw4N"
        );
      } catch (error) {
        console.log({ error });
      }
	  this.dialog = true;
      // Reset form field
      this.name = "";
      this.email = "";
      this.sdt = "";
    },
  },
};
</script>

<style>
.dialog-header{
	background-color: #272727;
	color: white
}
.v-card__text.dialog-content.pa-5{
	color: #000000;
	height:100px;
	font-size:16px
}
</style>
