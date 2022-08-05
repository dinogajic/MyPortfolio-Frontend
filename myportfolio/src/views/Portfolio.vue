<template>
  <v-app>
    <div class="portfolio">
      <div class="btn-container">
        <router-link to="/create-portfolio"
          ><button class="rl-cp">CREATE PORTFOLIO</button></router-link
        > 
      </div>
      <div class="container">
        <div class="row">
          <portfolio-component
            v-for="userPortfolio in userPortfolios"
            :key="userPortfolio.id"
            :userPortfolio="userPortfolio"
            :userData="userData"
          />
        </div>
      </div>
    
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
import PortfolioComponent from "@/components/PortfolioComponent.vue";

export default {
  name: "Portfolio",
  data() {
    return {
      userPortfolios: [],
      userData: [],
    };
  },
  mounted() {
    this.getUserPortfolio();
    this.getUserData();
  },
  methods: {
    async getUserPortfolio() {
      const response = await axios(
        "https://my-portfolio-wa.herokuapp.com/portfolio"
      );
      await response.data.forEach((portfolio) => {
        this.userPortfolios.push({
          _id: portfolio._id,
          projectTitle: portfolio.projectTitle,
          projectSubtitle: portfolio.projectSubtitle,
          projectDescription: portfolio.projectDescription,
          projectLinks: portfolio.projectLinks,
          userEmail: portfolio.userEmail,
          template: portfolio.template,
          imagesArray: portfolio.imagesArray
        })  
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
    
  },
  components: { PortfolioComponent },
};
</script>

<style scoped>
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

.row > * {
  width: 50% !important;
}

@media (max-width: 992px) {
  .row > * {
    width: 100% !important;
  }
}

@media (max-width: 1080px) {
  .row > * {
    width: 50% !important;
  }
}
</style>
