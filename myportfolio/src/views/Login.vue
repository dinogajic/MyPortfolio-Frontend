<template>
  <form @submit.prevent="login" class="form-login">
    <div class="form">
      <div class="form-group">
        <label for="inputlEmail">E-mail</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputlEmail"
          aria-describedby="emailHelp"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group">
        <label for="inputlPassword">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputlPassword"
          placeholder="Password"
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
      <a class="passwordreset" href="/">Forgotten password?</a>
      <div class="submit-button">
        <button type="submit" class="btnLogin btn btn-primary">Log In</button>
      </div>
    </div>
    <p class="error"></p>
  </form>
</template>
<script>
import { Auth } from "@/services";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let success = await Auth.login(this.email, this.password);
      console.log("Rezultat prijave", success);

      if (success == true) {
        this.$router.push({ name: "Profile" });
      } else {
        this.$router.go();
      }
    },
  },
};
</script>
