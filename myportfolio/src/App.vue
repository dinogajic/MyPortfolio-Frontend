<template>
  <div class="app scrollbar-hidden">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img
            class="nav-logo"
            src="@/assets/MyPortfolioTextWhitepng.png"
            alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="green-text"><i class="fas fa-bars fa-1x"></i></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link class="nav-link" to="/" v-if="auth.authenticated">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-house-door-fill show-left"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
                />
              </svg>
              HOME<svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-house-door-fill show-right"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
                /></svg
            ></router-link>
            <router-link
              class="nav-link"
              to="/portfolio"
              v-if="auth.authenticated"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-card-heading show-left"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"
                /></svg
              >PORTFOLIO<svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-card-heading show-right"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"
                /></svg
            ></router-link>
            <router-link
              class="nav-link"
              to="/profile"
              v-if="auth.authenticated"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-person-fill show-left"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                /></svg
              >PROFILE<svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-person-fill show-right"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                /></svg
            ></router-link>
            <a class="nav-link" @click="logout" v-if="auth.authenticated">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-box-arrow-right show-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                /></svg
              >LOG OUT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="18"
                fill="currentColor"
                class="bi bi-box-arrow-right show-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                /></svg
            ></a>
            <a class="nav-link" @click="goToLogin()" v-if="!auth.authenticated">
              LOG IN
            </a>
            <a
              class="nav-link"
              @click="goToRegister()"
              v-if="!auth.authenticated"
            >
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "App",

  data() {
    return {
      auth: Auth.state,
    };
  },
  mounted() {},
  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    goToRegister() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge add Firefox */
html {
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}

* {
  font-family: "Oswald", sans-serif;
}

nav {
  background-color: #089965;
  z-index: 999;
}

a {
  cursor: pointer !important;
  color: white !important;
}

a:hover {
  color: rgb(224, 224, 224) !important;
}

.modal form label {
  margin-top: 10px;
}

.loginRegisterBtn {
  padding: 10px;
}

.loginButton {
  background-color: #25d294;
  padding: 10px;
  border-radius: 5px;
  color: white;
  width: 100%;
  transition: 0.2s;
}

.loginButton:hover {
  background-color: #089965;
  transition: 0.2s;
}

.registerButton {
  width: 100%;
  background-color: #25d294;
  padding: 10px;
  border-radius: 5px;
  color: white;
  transition: 0.2s;
}

.registerButton:hover {
  background-color: #089965;
  transition: 0.2s;
}

.btnLogin {
  background-color: #25d294;
  border-color: #25d294;
  transition: 0.2s;
  width: 100%;
  margin-top: 10px;
}

.btnLogin:hover {
  background-color: #089965;
  border-color: #089965;
  transition: 0.2s;
}

.btnRegister {
  background-color: #25d294;
  border-color: #25d294;
  transition: 0.2s;
  width: 100%;
  margin-top: 10px;
}

.btnRegister:hover {
  background-color: #089965;
  border-color: #089965;
  transition: 0.2s;
}

.passwordreset {
  color: #25d294 !important;
  transition: 0.2s;
}

.passwordreset:hover {
  color: #089965 !important;
  transition: 0.2s;
}

.form-check-input {
  margin-top: 15px;
  box-shadow: none;
}

.form-check-input:checked {
  background-color: #25d294;
  border-color: #25d294;
}

.form-check-input:focus {
  color: white;
  outline: none;
  box-shadow: none;
}

.nav-logo {
  height: 50px;
}

.show-left {
  display: none;
}

.nav-link {
  display: flex;
  align-items: center;
}

.navbar-toggler {
  background: none !important;
  color: none !important;
  border: none;
  transition: 0.3s !important;
  z-index: 999;
}

.navbar-toggler:hover {
  background-color: none !important;
  opacity: 0.9;
  transition: 0.3s !important;
}

.navbar-toggler:focus {
  box-shadow: none !important;
}

.green-text {
  color: white;
  transition: 0.3s;
  background: none;
}

.green-text:hover {
  opacity: 0.6;
  transition: 0.3s;
}

/* LOGIN/REGISTER */

.registerForm {
  display: none;
}

@media (max-width: 992px) {
  a {
    font-size: 1.1rem !important;
  }
  .show-left {
    display: flex;
  }

  .show-right {
    display: none;
  }

  svg {
    height: 24px;
    margin-right: 10px;
  }
  .navbar-collapse {
    position: fixed;
    top: 75px;
    left: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    width: 50%;
    height: 100%;
    background: #25d294;
  }

  .navbar-collapse.collapsing {
    left: -75%;
    transition: height 0s ease;
  }

  .navbar-collapse.show {
    left: 0;
    transition: left 300ms ease-in-out;
  }

  .navbar-toggler.collapsed ~ .navbar-collapse {
    transition: left 500ms ease-in-out;
  }
}
</style>
