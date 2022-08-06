<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text color="green" text>{{ alertResponseData }}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false; pushRouter()"
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
      
    };
  },
  methods: {
    pushRouter() {
        this.$router.push({ name: "Portfolio" })
    }
  }
};
</script>