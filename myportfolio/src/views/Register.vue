<template>
  <v-app>
    <div class="container">
      <form @submit.prevent="registerUser" @keydown.space.prevent>
        <div class="form">
          <div class="form-group">
            <label for="inputName">Name</label>
            <input
              v-model="firstName"
              type="text"
              class="form-control"
              id="inputName"
              placeholder="First Name"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputSurname">Surname</label>
            <input
              v-model="lastName"
              type="text"
              class="form-control"
              id="inputSurname"
              placeholder="Surname"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputEmail">Email adresa</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Email adresa"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputRepeatPassword">Repeat password</label>
            <input
              v-model="repeatPassword"
              type="password"
              class="form-control"
              id="inputRepeatPassword"
              placeholder="Repeat password"
              required
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              @click="showPassword()"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >Show password</label
            >
          </div>
          <div class="submit-button">
            <button type="submit" class="rl-cp">Register</button>
          </div>
        </div>
        <p class="error"></p>
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
  data() {
    return {
      // CREDENTIALS
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",

      // NOTIFICATION MODAL
      alertResponseData: "",
      dialog: false,
    };
  },
  methods: {
    async registerUser() {
      if (this.password != this.repeatPassword) {
        this.alertResponseData = "Passwords do not match.";
        this.dialog = true;
      } else {
        const res = await axios
          .post("https://my-portfolio-wa.herokuapp.com/register", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            userData: {
              country: null,
              mobile_number: null,
              address: null,
              postcode: null,
              education: [],
              workExperience: [],
            },
          })
          .then((response) => {
            this.alertResponseData = response.data.msg;
            this.dialog = true;
          });
      }
    },
    showPassword() {
      var password = document.getElementById("inputPassword");
      var repeatPassword = document.getElementById("inputRepeatPassword");
      if (password.type === "password" && repeatPassword.type === "password") {
        password.type = "text";
        repeatPassword.type = "text";
      } else {
        password.type = "password";
        repeatPassword.type = "password";
      }
    },
  },
  components: {
    Dialog,
  },
};
</script>

<style scoped>
.rl-cp {
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

.form-control {
  border-radius: 0px !important;
}

.container {
  margin: 10px;
  padding: 50px;
  box-shadow: 1px 10px 20px #888888;
  border: 1px solid #089965;
  margin: 10% auto auto auto;
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
