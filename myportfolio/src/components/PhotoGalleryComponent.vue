<template>
  <v-card
    class="mx-auto mobile"
    max-width="500"
    v-if="userPortfolio.template == 3"
    min-width="500px"
  >
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      delimiter-icon="mdi-minus"
      height="300"
    >
      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">
              <v-img
                :src="imageRef + image.data"
                max-height="400"
                max-width="500"
                contain
              />
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card-title>{{ userPortfolio.photoGalleryTitle }}</v-card-title>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="imageRef + userImage"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-for="(user, i) in userData" :key="i">{{
            user.firstName + " " + user.lastName
          }}</v-list-item-title>
          <v-list-item-subtitle>Author</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn color="green" text> MORE </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ userPortfolio.photoGalleryDescription }}
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-card-actions v-if="path">
          <v-btn color="green" dark v-bind="attrs" v-on="on">
            UPDATE PORTFOLIO
          </v-btn>
          <v-btn color="red" dark @click="deletePortfolio(userPortfolio._id)">
            DELETE PORTFOLIO
          </v-btn>
        </v-card-actions>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Photo Gallery</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Gallery Title"
                  v-model="userPortfolio.photoGalleryTitle"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Gallery Description"
                  v-model="userPortfolio.photoGalleryDescription"
                  required
                ></v-textarea>
              </v-col>
              <v-card-actions>
                <v-btn
                  color="blue darken-1"
                  dark
                  @click="
                    showUpdateImages = !showUpdateImages;
                    files = null;
                  "
                  >CHANGE IMAGES</v-btn
                >
              </v-card-actions>
              <v-col cols="12" v-if="showUpdateImages">
                <v-file-input
                  v-model="files"
                  name="image"
                  accept="image/png"
                  label="Gallery Images"
                  multiple
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="
              dialog = false;
              editPortfolio(userPortfolio._id);
            "
          >
            Save
          </v-btn>
          <Dialog
            :alertResponseData="alertResponseData"
            :dialog="dialogUpdate"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";

import Dialog from "@/components/Dialog.vue";

export default {
  props: ["userPortfolio", "userData", "userImage"],
  name: "PhotoGalleryComponent",
  data() {
    return {
      // CARD
      show: false,
      cycle: false,

      // CARD IMAGES
      images: this.userPortfolio.imagesArray,
      imageRef: "data:image/png;base64,",

      // CARD UPDATE MODAL
      dialog: false,

      // CARD UPDATE IMAGES
      files: null,
      showUpdateImages: false,

      // VIEW PATH
      path: true,

      // NOTIFICATION MODAL
      alertResponseData: "",
      dialogUpdate: false,
    };
  },
  mounted() {
    this.checkPath();
  },
  methods: {
    async checkPath() {
      if (this.$route.path == "/portfolio") {
        this.path = true;
      } else {
        this.path = false;
      }
    },
    async editPortfolio(id) {
      const data = new FormData();
      data.append("photoGalleryTitle", this.userPortfolio.photoGalleryTitle);
      data.append(
        "photoGalleryDescription",
        this.userPortfolio.photoGalleryDescription
      );
      data.append("templateChoice", this.userPortfolio.template);
      if (this.files) {
        this.files.forEach((file) => {
          data.append("images", file);
        });
      }
      const response = await axios.patch(
        "https://my-portfolio-wa.herokuapp.com/portfolio/" + id,
        data
      );
      if (this.files) {
        const res = await axios.patch(
          "https://my-portfolio-wa.herokuapp.com/portfolio-img/" + id,
          data
        );
      }
      this.alertResponseData = response.data.msg;
      this.dialogUpdate = true;
    },
    async deletePortfolio(id) {
      await axios.delete(
        "https://my-portfolio-wa.herokuapp.com/portfolio/" + id
      );
      this.$router.go();
    },
  },
  components: {
    Dialog,
  },
};
</script>

<style scoped>
div >>> .v-application--wrap {
  min-height: 65vh !important;
}

a i {
  color: #089965;
  transition: 0.2s;
}

a i:hover {
  opacity: 0.6;
}

@media (max-width: 600px) {
  .mobile {
    max-width: 350px !important;
    min-width: 350px !important;
  }
}
</style>
