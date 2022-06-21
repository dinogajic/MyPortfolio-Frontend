<template>
  <form @submit.prevent="registerUser" class="form-register">
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
        <button type="submit" class="btnRegister btn btn-primary">
          Register
        </button>
      </div>
    </div>
    <p class="error"></p>
  </form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    async registerUser() {
      const res = await axios.post(
        "https://my-portfolio-wa.herokuapp.com/register",
        {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          userData: {
            country: null,
            mobile_number: null,
            address: null,
            postcode: null,
            education: null,
          },
        }
      );
      console.log(res);
    },
  },
};
</script>
