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
          </div>
        </div>
        <div
          class="col-md-5 border-right"
          v-for="data in userData"
          :key="data.id"
        >
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
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
              <div class="col-md-12">
                <label class="labels">Education</label>
                <p v-for="(edu, i) in data.education" :key="i">
                  {{ data.education[i] }}
                </p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Country</label>
                <p>{{ data.country }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div
              class="d-flex justify-content-between align-items-center experience"
            >
              <span>Edit Experience</span
              ><span class="border px-3 p-1 add-experience"
                ><i class="fa fa-plus"></i>&nbsp;Experience</span
              >
            </div>
            <br />
            <div class="col-md-12">
              <label class="labels">Experience in Designing</label>
            </div>
            <br />
            <div class="col-md-12">
              <label class="labels">Additional Details</label>
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
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      imageRef: "data:image/png;base64,",
      image: "",
      imageId: "",
      userData: [],
      imageReference: null,
    };
  },
  mounted() {
    this.getUserData();
    this.getImage();
    /* this.setPicture(); */
  },
  methods: {
    /* setPicture() {
      console.log(document.getElementById("foo"))
      if(document.getElementById("foo")) {
        console.log("Hahahaha")
      }
    }, */
    async getUserData() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/user"
      );
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
      });
    },
    async getImage() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/profile_image"
      );
      /* this.image = btoa(
          String.fromCharCode(...new Uint8Array(response.data.img.data))
        )   */
      this.image = response.data.img.data;
    },
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

.profile-button {
  background: #25d294;
  box-shadow: none;
  border: none;
  color: white;
  transition: 0.3s;
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
