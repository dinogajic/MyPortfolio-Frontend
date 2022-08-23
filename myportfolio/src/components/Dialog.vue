<template>
  <div class="text-center">
    <v-dialog v-model="compDialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Notification
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text color="green" text>{{ alertResponseData }}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="
              compDialog = false;
              pushRouter();
            "
          >
            ACCEPT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["alertResponseData", "dialog"],
  name: "Dialog",
  data() {
    return {
      compDialog: this.dialog,
    };
  },
  methods: {
    pushRouter() {
      if (this.alertResponseData.includes("User already exists.")) {
        this.$router.go();
      } else if (
        this.alertResponseData.includes("Profile successfully created.")
      ) {
        this.$router.push({ name: "Login" });
      } else if (
        this.alertResponseData.includes("Form contains invalid values.")
      ) {
        this.$router.go();
      } else if (
        this.alertResponseData.includes(
          "User information has successfully updated."
        )
      ) {
        this.$router.push({ name: "Profile" });
      } else if (this.alertResponseData.includes("Update error")) {
        this.$router.go();
      } else if (
        this.alertResponseData.includes("Profile picture successfully updated.")
      ) {
        this.$router.go();
      } else if (
        this.alertResponseData.includes("portfolio created successfully.")
      ) {
        this.$router.push({ name: "Portfolio" });
      } else if (
        this.alertResponseData.includes("Failed to create a portfolio.")
      ) {
        this.$router.go();
      } else if (this.alertResponseData.includes("Email sent to")) {
        this.$router.go();
      } else if (
        this.alertResponseData.includes("Password changed successfully.")
      ) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  watch: {
    alertResponseData() {
      this.compDialog = true;
    },
  },
};
</script>
