<template>
  <div class="text-center">
    <v-dialog v-model="compDialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Notification
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text color="green" text>{{ alertResponseData }}</v-card-text>
        <div class="copy">
          <svg
            v-if="showIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-clipboard icon"
            viewBox="0 0 16 16"
            @click="
              Copy();
              showIcon = !showIcon;
            "
          >
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
            />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
            />
          </svg>
          <svg
            v-if="!showIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="green"
            class="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path
              d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
            />
          </svg>
        </div>
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
      // DIALOG MODAL PROP
      compDialog: this.dialog,
      showIcon: true,
    };
  },
  methods: {
    pushRouter() {
      this.$router.go();
    },
    Copy() {
      navigator.clipboard.writeText(this.alertResponseData);
    },
  },
  watch: {
    alertResponseData() {
      this.compDialog = true;
    },
  },
};
</script>
<style>
.copy {
  text-align: center !important;
}

.icon:hover {
  cursor: pointer;
}
</style>
