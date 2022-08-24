<template>
  <div class="text-center">
    <v-dialog v-model="compDialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Notification
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text color="green" text>{{ alertChoiceData }}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="
              compDialog = false;
              resetPassword();
            "
          >
            YES
          </v-btn>
          <v-btn
            color="red"
            text
            @click="
              compDialog = false;
              refreshPage();
            "
          >
            NO
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["alertChoiceData", "choiceDialog", "resetPassword"],
  name: "Dialog",
  data() {
    return {
      // CHOICE DIALOG MODAL PROP
      compDialog: this.choiceDialog,
    };
  },
  methods: {
    refreshPage() {
      this.$router.go();
    },
  },
  watch: {
    alertChoiceData() {
      this.compDialog = true;
    },
  },
};
</script>
