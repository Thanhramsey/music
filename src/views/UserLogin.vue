<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation class="form-us">
      <v-text-field
        v-model="taiKhoan"
        :counter="20"
        :rules="nameRules"
        label="Tài Khoản"
        required
        single-line
        outlined
        solo
        dense
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        required
        single-line
        outlined
        solo
        dense
		type="password"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

	   <v-btn :disabled="!valid" color="success" class="mr-4" @click="loggin">
        Loggin
      </v-btn>
	   <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
    </v-form>
  </v-container>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.isLogin);
  },
  data: () => ({
    valid: true,
    name: "",
    password: "",
	taiKhoan: "",
	address: "",
	phone: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  methods: {
	loggin(){
		console.log("this.$refs.form.validate()",this.$refs.form.validate());
		this.$refs.form.validate();
		if(this.$refs.form.validate()){
			this.$refs.form.reset();
		}
	},
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>