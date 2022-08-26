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
                <label class="labels">Country</label>
                <p>{{ data.country }}</p>
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
            <div class="p-3 py-5">
              <router-link :to="'/edit-profile/' + data._id"
                ><button class="rl-cp w-100" type="button">
                  Edit Profile
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="component-container">
        <design-portfolio-component
          style="margin-top: 30px"
          v-for="userPortfolio in userPortfolios"
          :key="userPortfolio.id"
          :userPortfolio="userPortfolio"
          :userData="userData"
          :userImage="userImage"
        />
        <software-portfolio-component
          style="margin-top: 30px"
          v-for="userPortfolio in userPortfolios"
          :key="userPortfolio.id"
          :userPortfolio="userPortfolio"
          :userData="userData"
          :userImage="userImage"
        />
        <photo-gallery-component
          style="margin-top: 30px"
          v-for="userPortfolio in userPortfolios"
          :key="userPortfolio.id"
          :userPortfolio="userPortfolio"
          :userData="userData"
          :userImage="userImage"
        />
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

// COMPONENTS
import DesignPortfolioComponent from "@/components/DesignPortfolioComponent.vue";
import SoftwarePortfolioComponent from "@/components/SoftwarePortfolioComponent.vue";
import PhotoGalleryComponent from "@/components/PhotoGalleryComponent.vue";

export default {
  name: "PublicPage",
  data() {
    return {
      // USER DATA
      userData: [],

      // USER PROFILE PICTURE
      imageRef: "data:image/png;base64,",
      image: "",

      // USER PORTFOLIOS
      userPortfolios: [],
      userImage: "",
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/public/" + this.$route.params.id
      );
      console.log(response.data);
      if (response.data.msg) {
        console.log(response.data.msg);
      } else {
        this.userData.push({
          _id: response.data[0]._id,
          email: response.data[0].email,
          firstName: response.data[0].firstName,
          lastName: response.data[0].lastName,
          country: response.data[0].userData.country,
          mobile_number: response.data[0].userData.mobile_number,
          address: response.data[0].userData.address,
          postcode: response.data[0].userData.postcode,
          education: response.data[0].userData.education,
          workExperience: response.data[0].userData.workExperience,
        });
        this.image = response.data[1].img.data;
        response.data[2].forEach((portfolio) => {
          if (portfolio.template == 1) {
            this.userPortfolios.push({
              _id: portfolio._id,
              designPortfolioTitle: portfolio.designPortfolioTitle,
              designPortfolioDescription: portfolio.designPortfolioDescription,
              designPortfolioLinks: portfolio.designPortfolioLinks,
              userEmail: portfolio.userEmail,
              template: portfolio.template,
              imagesArray: portfolio.imagesArray,
            });
          }
          if (portfolio.template == 2) {
            this.userPortfolios.push({
              _id: portfolio._id,
              softwarePortfolioTitle: portfolio.softwarePortfolioTitle,
              softwarePortfolioDescription:
                portfolio.softwarePortfolioDescription,
              softwarePortfolioLinks: portfolio.softwarePortfolioLinks,
              userEmail: portfolio.userEmail,
              template: portfolio.template,
              imagesArray: portfolio.imagesArray,
            });
          }
          if (portfolio.template == 3) {
            this.userPortfolios.push({
              _id: portfolio._id,
              photoGalleryTitle: portfolio.photoGalleryTitle,
              photoGalleryDescription: portfolio.photoGalleryDescription,
              userEmail: portfolio.userEmail,
              template: portfolio.template,
              imagesArray: portfolio.imagesArray,
            });
          }
        });
      }
    },
  },
  components: {
    DesignPortfolioComponent,
    SoftwarePortfolioComponent,
    PhotoGalleryComponent,
  },
};
</script>
<style scoped>
.work-experience {
  border: 1px solid #089965;
  padding: 10px;
  margin-top: 10px;
  word-wrap: break-word;
}

.component-container {
  margin: auto;
  width: 75%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}

@media (max-width: 600px) {
  .component-container {
    width: 100%;
  }
}
</style>
