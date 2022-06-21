<template>
  <div class="profile">
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <div>
              <croppa
                class="rounded-circle"
                v-model="croppa"
                :width="200"
                :height="200"
                :image-border-radius="225"
                prevent-white-space
              ></croppa>
            </div>

            <span class="mt-2">Rene Borić</span
            ><span class="text-black-50 mt-2">rboric1901@gmaill.com</span
            ><span>
              <label class="btn btn-primary profile-button mt-3">
                <input type="file" />
                Choose Picture
              </label></span
            >
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <!-- <div class="col-md-6">
                <label class="labels">Name</label
                ><input
                  required
                  v-model="firstName"
                  type="text"
                  class="form-control"
                  placeholder="Name..."
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label
                ><input
                  required
                  v-model="lastName"
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="Surname..."
                />
              </div> -->
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label
                ><input
                  required
                  v-model="mobile_number"
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
                  v-model="address"
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
                  v-model="postcode"
                  type="text"
                  class="form-control"
                  placeholder="Enter Postcode..."
                  value=""
                />
              </div>
              <!--  <div class="col-md-12">
                <label class="labels">Email</label
                ><input
                  required
                  v-model="email"
                  type="text"
                  class="form-control"
                  placeholder="Enter Your E-mail..."
                  value=""
                />
              </div> -->
              <div class="col-md-12">
                <label class="labels">Education</label
                ><input
                  required
                  v-model="education"
                  type="text"
                  class="form-control"
                  placeholder="Education..."
                  value=""
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Country</label
                ><input
                  required
                  v-model="country"
                  type="text"
                  class="form-control"
                  placeholder="Country..."
                  value=""
                />
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
              <label class="labels">Experience in Designing</label
              ><input
                type="text"
                class="form-control"
                placeholder="Experience"
                value=""
              />
            </div>
            <br />
            <div class="col-md-12">
              <label class="labels">Additional Details</label
              ><input
                type="text"
                class="form-control"
                placeholder="Additional details"
                value=""
              />
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
          <div class="mt-2 text-center">
            <button
              class="btn btn-primary profile-button"
              type="button"
              @click="updateUser"
            >
              Save Profile
            </button>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      userID: [],
      /* firstName: "",
      lastName: "",
      email: "", */
      mobile_number: "",
      address: "",
      postcode: "",
      education: "",
      country: "",
      imageReference: null,
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/user"
      );
      this.userID.push({
        _id: response.data._id,
      });
      console.log(this.userID[0]._id);
    },
    async updateUser() {
      const res = await axios.patch(
        "http://localhost:3000/user/" + this.userID[0]._id,
        {
          /* firstName: this.firstName,
          lastName: this.lastName,
          email: this.email, */
          userData: {
            mobile_number: this.mobile_number,
            country: this.country,
            address: this.address,
            postcode: this.postcode,
            education: this.education,
          },
        }
      );
      alert("ASDASD");
      this.$router.push({ name: "Profile" });
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

.add-experience:hover {
  background: #25d294;
  color: #fff;
  cursor: pointer;
  border: solid 1px #25d294;
  transition: 0.3s;
}
</style>
