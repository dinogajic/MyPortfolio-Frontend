<template>
  <form @submit.prevent="login" @keydown.space.prevent class="form-login">
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
    <p v-if="errorMessage" class="error">{{errorMessage}}</p>
  </form>
</template>
<script>
import { Auth } from "@/services";
 
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      
      let success = await Auth.login(this.email, this.password).catch((error) => {
        this.errorMessage = error.response.data.msg
      });

      if (success == true) {
        this.$router.push({ name: "Home" });
      } else {
      
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
  padding: 5px;
  border: 1px solid red;
  width: 200px;
  margin: 10px auto auto auto;
  text-align: center;
}
</style>