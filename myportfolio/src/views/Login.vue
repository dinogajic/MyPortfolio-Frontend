<template>
  <div class="container">
    <form @submit.prevent="login" @keydown.space.prevent>
      <div class="form">
        <div class="form-group">
          <label for="inputlEmailLabel">E-mail</label>
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
          <label for="inputlPasswordLabel">Password</label>
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
            id="checkboxPassword"
            @click="showPassword()"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >Show password</label
          >
        </div>
        <a class="passwordreset" href="/password-reset">Forgotten password?</a>
        <div>
          <button type="submit" class="rl-cp">Log In</button>
        </div>
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>
<script>
import { Auth } from "@/services";

export default {
  data() {
    return {
      // CREDENTIALS
      email: "",
      password: "",

      // IF ERROR
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      let success = await Auth.login(this.email, this.password).catch(
        (error) => {
          this.errorMessage = error.response.data.msg;
        }
      );

      if (success == true) {
        this.$router.push({ name: "Home" });
      }
    },
    showPassword() {
      var password = document.getElementById("inputlPassword");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
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

.passwordreset {
  color: #089965 !important;
  transition: 0.2s;
}

.passwordreset:hover {
  opacity: 0.8;
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
