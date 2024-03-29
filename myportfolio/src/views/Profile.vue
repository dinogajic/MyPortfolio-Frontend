<template>
  <v-app>
    <div class="py-10">
      <div class="row">
        <div
          v-for="data in userData"
          :key="data.id"
          class="col-md-3 border-right"
        >
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <div>
              <img
                id="profilePicture"
                :src="imageRef + image"
                width="200px"
                height="200px"
              />
            </div>

            <span class="mt-2 font-weight-bold">
              {{ data.firstName }} {{ " " }} {{ data.lastName }}</span
            ><span class="text-black-50 mt-2">{{ data.email }}</span>
            <span
              ><button class="rl-cp w-100 mt-2" @click="getPublicLink()">
                GENERATE PUBLIC LINK
              </button></span
            >
            <span class="mt-2"
              ><a :href="publicLink" class="publicLink">{{
                publicLink
              }}</a></span
            >
          </div>
        </div>
        <div
          class="col-md-5 border-right"
          v-for="data in userData"
          :key="data.id"
        >
          <div class="p-3 py-5">
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label>
                <p>{{ data.firstName }}</p>
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label>
                <p>{{ data.lastName }}</p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label>
                <p>{{ data.mobile_number }}</p>
              </div>
              <div class="col-md-12">
                <label class="labels">Address</label>
                <p>{{ data.address }}</p>
              </div>
              <div class="col-md-12">
                <label class="labels">Postcode</label>
                <p>{{ data.postcode }}</p>
              </div>

              <div class="col-md-12">
                <label class="labels">Email</label>
                <p>{{ data.email }}</p>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <p>{{ data.country }}</p>
                </div>
              </div>
              <div class="col-md-12">
                <label class="labels">Education</label>
                <div
                  v-for="(edu, i) in data.education"
                  :key="i"
                  class="work-experience"
                >
                  <span
                    ><h5>{{ edu.schoolName }}</h5></span
                  >
                  <div
                    class="align-items-center justify-content-between d-flex"
                  >
                    <span style="color: #25d294; font-size: 16px"
                      >{{ edu.schoolStartYear }} - {{ edu.schoolEndYear }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4" v-for="data in userData" :key="data.id">
          <div class="p-3 py-5">
            <span><h4>Work Experience</h4></span>
            <div
              v-for="(work, i) in data.workExperience"
              :key="i"
              class="work-experience"
            >
              <div class="justify-content-between align-items-center d-flex">
                <span
                  ><h5>{{ work.jobName }}</h5></span
                >
                <span style="color: #25d294; font-size: 14px"
                  >{{ work.jobStartYear }} - {{ work.jobEndYear }}</span
                >
              </div>

              <p>{{ work.jobDescription }}</p>
            </div>
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
              <img
                class=""
                width="150px"
                src="@/assets/MyPortfolioTextGreen.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <div class="mt-2 text-center" v-for="data in userData" :key="data.id">
            <router-link :to="'/edit-profile/' + data._id"
              ><button class="rl-cp w-100" type="button">
                Edit Profile
              </button></router-link
            >
            <button
              class="rl-cp w-100 mt-2"
              type="button"
              @click="changePassword"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
    <DialogChoice
      :alertChoiceData="alertChoiceData"
      :choiceDialog="choiceDialog"
      :resetPassword="resetPassword"
    />
    <Dialog :alertResponseData="alertResponseData" :dialog="dialog" />
    <DialogClipboard
      :alertResponseData="alertResponseDataClipboard"
      :dialog="dialogClipboard"
    />
  </v-app>
</template>

<script>
import axios from "axios";

// COMPONENTS
import Dialog from "@/components/Dialog.vue";
import DialogChoice from "@/components/DialogChoice.vue";
import DialogClipboard from "@/components/DialogClipboard.vue";

export default {
  name: "Profile",
  data() {
    return {
      // USER DATA
      userData: [],

      // NOTIFICATION MODAL
      alertResponseData: "",
      dialog: false,

      // CHOICE DIALOG
      alertChoiceData: "",
      choiceDialog: false,

      // CLIPBOARD MODAL
      alertResponseDataClipboard: "",
      dialogClipboard: false,

      // PROFILE IMAGE
      imageRef: "data:image/png;base64,",
      image: "",
      // PROFILE IMAGE V-MODEL
      imageReference: null,

      // USER EMAIl
      userEmail: "",

      // USER PUBLIC LINK
      publicLink: null,
    };
  },
  mounted() {
    this.getUserData();
    this.getImage();
  },
  methods: {
    async changePassword() {
      this.alertChoiceData = "Are you sure you want to change your password?";
      this.choiceDialog = true;
    },
    async resetPassword() {
      const response = await axios
        .post("https://my-portfolio-wa.herokuapp.com/change-password", {
          email: this.userData[0].email,
        })
        .then((response) => {
          if (response) {
            this.alertResponseData = response.data.msg;
            this.dialog = true;
          }
        });
    },
    async getUserData() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/user"
      );
      this.userEmail = response.data.email;
      this.userData.push({
        _id: response.data._id,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        country: response.data.userData.country,
        mobile_number: response.data.userData.mobile_number,
        address: response.data.userData.address,
        postcode: response.data.userData.postcode,
        education: response.data.userData.education,
        workExperience: response.data.userData.workExperience,
      });
    },
    async getImage() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/profile_image"
      );
      this.image = response.data.img.data;
    },
    async getPublicLink() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/generate-link"
      );
      this.alertResponseDataClipboard = response.data;
      this.dialogClipboard = true;
    },
  },
  components: {
    Dialog,
    DialogChoice,
    DialogClipboard,
  },
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
label {
  font-size: 15px !important;
  color: #089965;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #84e3c1 !important;
  opacity: 0.7 !important; /* Firefox */
  font-weight: 400;
  letter-spacing: 0px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  opacity: 0.7 !important;
  font-weight: 100;
  letter-spacing: 0px;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #84e3c1 !important;
  opacity: 0.7 !important;
  font-weight: 100;
  letter-spacing: 0px;
}

.form-control:focus {
  box-shadow: none;
  border-color: #84e3c1;
}

.work-experience {
  border: 1px solid #089965;
  padding: 10px;
  margin-top: 10px;
  word-wrap: break-word;
}

.profile-button {
  background: #25d294;
  box-shadow: none;
  border: none;
  color: white;
  transition: 0.3s;
}

.publicLink {
  font-size: 11px !important;
  color: #089965 !important;
  text-decoration: none !important;
  transition: 0.2s;
}

.publicLink:hover {
  opacity: 0.8 !important;
}

.profile-button:hover {
  background: #25d294;
  opacity: 0.7;
  transition: 0.3s;
}

.profile-button:focus {
  background: #25d294;
  box-shadow: none !important;
}

.profile-button:active {
  background: #25d294;
  box-shadow: none !important;
}

.back:hover {
  color: #25d294;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience {
  transition: 0.3s;
}

#profilePicture {
  border-radius: 100px;
}

.add-experience:hover {
  background: #25d294;
  color: #fff;
  cursor: pointer;
  border: solid 1px #25d294;
  transition: 0.3s;
}

.rl-cp {
  padding: 10px;
  color: white;
  border: 1px solid white;
  background-color: #089965;
  transition: 0.2s;
}

.rl-cp:hover {
  border: 1px solid #089965;
  color: #089965;
  background-color: white;
  transition: 0.2s;
}

/* Bootstrap */

.col-md-6 {
  padding: 6px !important;
}

.col-md-12 {
  padding: 6px !important;
}
</style>
