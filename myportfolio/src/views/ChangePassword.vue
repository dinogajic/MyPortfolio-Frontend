<template>
  <v-app>
    <div class="container">
      <form @submit.prevent="changePassword">
        <label for="inputlEmailLabel">New Password</label>
        <input type="password" class="form-control" v-model="newPassword" />
        <button type="submit" class="rl-cp">Send</button>
      </form>
      <Dialog :alertResponseData="alertResponseData" :dialog="dialog" />
    </div>
  </v-app>
</template>
<script>
import axios from "axios";

// COMPONENTS
import Dialog from "@/components/Dialog.vue";

export default {
  name: "ChangePassword",
  data() {
    return {
      // NOTIFICATION MODAL
      alertResponseData: "",
      dialog: false,

      // PASSWORD
      newPassword: null,
    };
  },
  mounted() {},
  methods: {
    async changePassword() {
      const response = await axios
        .post(
          "https://my-portfolio-wa.herokuapp.com/change-password/" +
            this.$route.params.id +
            "/" +
            this.$route.params.token,
          {
            password: this.newPassword,
          }
        )
        .then((response) => {
          if (response.data.msg) {
            console.log(response);
            this.alertResponseData = response.data.msg;
            this.dialog = true;
          } else {
            this.alertResponseData =
              response.data.toUpperCase() + "!" + " This link is already used.";
            this.dialog = true;
          }
        });
    },
  },
  components: {
    Dialog,
  },
};
</script>

<style scoped>
* {
  box-shadow: none !important;
}

.form-control {
  border-radius: 0px !important;
}

.container {
  padding: 50px;
  box-shadow: 1px 10px 20px #888888;
  border: 1px solid #089965;
  margin: 10% auto auto auto;
}

.rl-cp {
  margin-top: 10px;
  padding: 10px;
  color: white;
  border: 1px solid white;
  background-color: #089965;
  transition: 0.2s;
  width: 100%;
}

.rl-cp:hover {
  border: 1px solid #089965;
  color: #089965 !important;
  background-color: white;
  transition: 0.2s;
}

@media (max-width: 1920px) {
  .container {
    width: 50%;
  }
}

@media (max-width: 992px) {
  .container {
    width: 60%;
  }
}

@media (max-width: 576px) {
  .container {
    width: 90%;
  }
}
</style>
