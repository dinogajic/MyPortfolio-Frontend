<template>
  <v-app>
    <Dialog :alertResponseData="alertResponseData" :dialog="dialog" />
    <div class="profile py-10" v-for="data in userID" :key="data.id">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <div>
              <img
                id="profilePicture"
                :src="imageRef + image"
                width="200px"
                height="200px"
                alt=""
              />
              <v-file-input
                v-model="file"
                name="image"
                accept="image/png"
                label="Choose an Image"
                @change="loading = false"
              />
              <span class="text-black-50 font-weight-bold"
                >Suggested size: 200x200</span
              >
              <form>
                <!-- <input type="text" name="name"> -->
                <input
                  :disabled="loading"
                  type="button"
                  @click="updateProfileImage"
                  value="Save Image"
                  name="submit"
                  class="rl-cp w-100 mt-2"
                />
              </form>
              <div v-if="loading" class="mt-5 errorMessage">
                {{ errorMessage }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label
                ><input
                  disabled
                  v-model="data.firstName"
                  type="text"
                  class="form-control"
                  placeholder="Name..."
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label
                ><input
                  disabled
                  v-model="data.lastName"
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="Surname..."
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label
                ><input
                  required
                  v-model="data.mobile_number"
                  type="text"
                  class="form-control"
                  placeholder="Enter Phone Number..."
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Address</label
                ><input
                  required
                  v-model="data.address"
                  type="text"
                  class="form-control"
                  placeholder="Enter Address..."
                  value=""
                />
              </div>

              <div class="col-md-12">
                <label class="labels">Postcode</label
                ><input
                  required
                  v-model="data.postcode"
                  type="text"
                  class="form-control"
                  placeholder="Enter Postcode..."
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Email</label
                ><input
                  disabled
                  v-model="data.email"
                  type="text"
                  class="form-control"
                  placeholder="Enter Your E-mail..."
                  value=""
                />
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Country</label
                  ><input
                    required
                    v-model="data.country"
                    type="text"
                    class="form-control"
                    placeholder="Country..."
                    value=""
                  />
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
                    <button
                      color="red"
                      max-height="25px"
                      class="form-remove"
                      style="font-size: 13px"
                      @click="removeEducation(i)"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <button class="form-add mt-2" @click="showEducation = true">
                    Add+
                  </button>
                </div>
                <div v-if="showEducation">
                  <form @submit.prevent="saveEducationDetails()">
                    <input
                      required
                      v-model="educationDetails.schoolName"
                      type="text"
                      class="form-control form-education"
                      placeholder="School name..."
                      value=""
                    />
                    <input
                      required
                      v-model="educationDetails.schoolStartYear"
                      type="date"
                      class="form-control form-education"
                      value=""
                    />
                    <input
                      required
                      v-model="educationDetails.schoolEndYear"
                      type="date"
                      class="form-control form-education"
                      value=""
                    />
                    <button type="submit" class="form-add mt-2">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div
              class="d-flex justify-content-between align-items-center experience"
            >
              <span><h4>Work Experience</h4></span>
            </div>
            <br />
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
              <button
                color="red"
                max-height="25px"
                class="form-remove"
                @click="removeWorkExperience(i)"
              >
                Remove
              </button>
            </div>
            <button class="form-add mt-2" @click="showWorkExperience = true">
              Add+
            </button>

            <div
              class="col-md-12 align-items-center justify-content-between"
              v-if="showWorkExperience"
            >
              <form @submit.prevent="saveWorkExperienceDetails">
                <div>
                  <label class="labels" style="display: block !important"
                    >Job title</label
                  >
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="Job title.."
                    value=""
                    v-model="workExperienceDetails.jobName"
                  />
                </div>
                <div class="form-experience">
                  <label class="labels">From:</label>
                  <input
                    required
                    type="date"
                    class="form-control col-md-12"
                    placeholder="Starting year.."
                    value=""
                    v-model="workExperienceDetails.jobStartYear"
                  />
                  <label class="labels form-experience">To:</label>
                  <input
                    required
                    type="date"
                    class="form-control col-md-12"
                    placeholder="Ending year.."
                    value=""
                    v-model="workExperienceDetails.jobEndYear"
                  />
                </div>
                <div class="form-experience">
                  <label class="labels" style="display: block !important"
                    >Description:</label
                  >
                  <v-textarea
                    counter
                    required
                    :rules="rules"
                    type="text"
                    placeholder="Job description..."
                    v-model="workExperienceDetails.jobDescription"
                  ></v-textarea>
                </div>
                <button type="submit">Save</button>
              </form>
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
          <div class="mt-2 text-center col-md-12 p-3">
            <button class="rl-cp w-100" type="button" @click="updateUser">
              Save Profile
            </button>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
import Dialog from "@/components/Dialog.vue";

export default {
  name: "Profile",
  data() {
    return {
      rules: [(v) => v.length >= 100 || "Min 100 characters"],
      userID: [],
      firstName: "",
      lastName: "",
      email: "",
      mobile_number: "",
      address: "",
      postcode: "",
      education: [],
      educationDetails: {
        schoolName: "",
        schoolStartYear: null,
        schoolEndYear: null,
      },
      educationCount: null,
      showEducation: false,
      country: "",
      file: null,
      imageRef: "data:image/png;base64,",
      image: null,
      errorMessage: "",
      loading: false,
      dialog: false,
      alertResponseData: "",
      workExperience: [],
      showWorkExperience: false,
      workExperienceDetails: {
        jobName: "",
        jobStartYear: null,
        jobEndYear: null,
        jobDescription: "",
      },
    };
  },
  mounted() {
    this.getUserData();
    this.getImage();
  },
  methods: {
    async getUserData() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/user"
      );

      this.education = response.data.userData.education;
      this.workExperience = response.data.userData.workExperience;

      this.userID.push({
        _id: response.data._id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        mobile_number: response.data.userData.mobile_number,
        address: response.data.userData.address,
        postcode: response.data.userData.postcode,
        education: response.data.userData.education,
        country: response.data.userData.country,
        workExperience: response.data.userData.workExperience,
      });
    },
    async updateUser() {
      const res = await axios
        .patch(
          "https://my-portfolio-wa.herokuapp.com/user/" + this.userID[0]._id,
          {
            firstName: this.userID[0].firstName,
            lastName: this.userID[0].lastName,
            email: this.userID[0].email,
            userData: {
              mobile_number: this.userID[0].mobile_number,
              country: this.userID[0].country,
              address: this.userID[0].address,
              postcode: this.userID[0].postcode,
              education: this.education,
              workExperience: this.workExperience,
            },
          }
        )
        .then((response) => {
          this.alertResponseData = response.data.msg;
          this.dialog = true;
        });
    },
    async updateProfileImage() {
      const data = new FormData();
      if (this.file) {
        data.append(
          "name",
          Math.floor(Math.random() * 1000000000001) +
            "_" +
            this.file.name.toLowerCase()
        );
        data.append("image", this.file);
        await axios
          .post("https://my-portfolio-wa.herokuapp.com/profile_image", data)
          .then((response) => {
            this.alertResponseData = response.data.msg;
            this.dialog = true;
          });
      } else {
        this.loading = true;
        this.errorMessage = "Choose an image!";
      }
    },
    async getImage() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/profile_image"
      );
      /* this.image = btoa(
          String.fromCharCode(...new Uint8Array(response.data[0].img.data.data))
        )   */
      this.image = response.data.img.data;
      this.educationCount--;
    },
    async saveEducationDetails() {
      this.education.push(this.educationDetails);
      this.showEducation = false;
    },
    async removeEducation(id) {
      const index = this.education.indexOf(id);
      this.education.splice(index, 1);
      this.educationCount--;
    },
    async saveWorkExperienceDetails() {
      this.workExperience.push(this.workExperienceDetails);
      this.showWorkExperience = false;
    },
    async removeWorkExperience(id) {
      const index = this.workExperience.indexOf(id);
      this.workExperience.splice(index, 1);
    },
  },
  components: {
    Dialog,
  },
};
</script>

<style scoped>
input:disabled {
  opacity: 0.6;
  cursor: default;
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

.form-education {
  margin-top: 10px;
}

.form-education:hover {
  border-color: #84e3c1;
}

.form-add {
  padding: 5px;
  background-color: #089965;
  color: white;
  border: 1px solid white;
  transition: 0.2s;
  font-size: 13px;
}

.form-add:hover {
  background-color: white;
  color: #089965;
  border: 1px solid #089965;
}

.form-remove {
  margin-top: 10px;
  padding: 5px;
  background-color: #ce1616;
  color: white;
  border: 1px solid white;
  transition: 0.2s;
  font-size: 13px;
}

.form-remove:hover {
  background-color: white;
  color: #ce1616;
  border: 1px solid #ce1616;
}

.form-experience {
  margin-top: 10px;
}

.experience-div {
  padding: 0 !important;
}

.work-experience {
  border: 1px solid #089965;
  padding: 10px;
  margin-top: 10px;
  word-wrap: break-word;
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

.add-experience:hover {
  background: #25d294;
  color: #fff;
  cursor: pointer;
  border: solid 1px #25d294;
  transition: 0.3s;
}

#profilePicture {
  border-radius: 100px;
}

.errorMessage {
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 10px;
}

.rl-cp {
  padding: 10px;
  color: white;
  border: 1px solid white;
  background-color: #089965;
  transition: 0.2s;
}

.rl-cp:hover:enabled {
  border: 1px solid #089965;
  color: #089965;
  background-color: white;
  transition: 0.2s;
}

/* Bootstrap */

.form-control {
  border-radius: 0px !important;
}

.col-md-6 {
  padding: 6px !important;
}

.col-md-12 {
  padding: 6px !important;
}
</style>
