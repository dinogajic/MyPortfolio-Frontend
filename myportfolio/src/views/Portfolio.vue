<template>
  <v-app>
    <div class="btn-container">
      <router-link to="/create-portfolio"
        ><button class="rl-cp">CREATE PORTFOLIO</button></router-link
      >
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
    <div style="margin-top: 50px"></div>
    <Dialog :alertResponseData="alertResponseData" :dialog="dialog" />
  </v-app>
</template>

<script>
import axios from "axios";

// COMPONENTS
import DesignPortfolioComponent from "@/components/DesignPortfolioComponent.vue";
import SoftwarePortfolioComponent from "@/components/SoftwarePortfolioComponent.vue";
import PhotoGalleryComponent from "@/components/PhotoGalleryComponent.vue";

export default {
  name: "Portfolio",
  data() {
    return {
      // USER PORTFOLIOS DATA
      userPortfolios: [],

      // USER DATA
      userData: [],

      // USER IMAGE
      userImage: "",
    };
  },
  mounted() {
    this.getUserPortfolio();
    this.getUserData();
    this.getUserImage();
  },
  methods: {
    async getUserPortfolio() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/portfolio"
      );
      await response.data.forEach((portfolio) => {
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
    },
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
    async getUserImage() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/profile_image"
      );
      this.userImage = response.data.img.data;
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
.component-container {
  margin: auto;
  width: 75%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}

.btn-container {
  width: 30%;
  margin: 20px auto 20px auto;
  text-align: center;
}

.rl-cp {
  padding: 30px;
  color: white;
  border: 1px solid white;
  background-color: #089965;
  transition: 0.2s;
}

.rl-cp:hover {
  border: 1px solid #089965;
  color: #089965 !important;
  background-color: white;
  transition: 0.2s;
}

@media (max-width: 600px) {
  .component-container {
    width: 90%;
  }
}
</style>
