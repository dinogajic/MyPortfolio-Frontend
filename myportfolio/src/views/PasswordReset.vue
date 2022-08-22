<template>
  <form ref="form" @submit.prevent="resetPassword">
    <label>Email</label>
    <input type="email" name="email" v-model="email" class="form-control" />
    <input type="submit" value="Send" class="form-control" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "PasswordReset",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async resetPassword() {
      const response = await axios
        .post("https://my-portfolio-wa.herokuapp.com/change_password", {
          email: this.email,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
