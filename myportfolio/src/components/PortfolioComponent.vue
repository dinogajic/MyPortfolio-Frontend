<template>
  <v-app>
    <div v-if="userPortfolio.template == 1">
    <div name="template1" class="col-sm-12">
      <v-card class="mx-auto" max-width="500"
        >
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item  v-for="(portfolioImage, i) in portfolioImages" :key="i" >
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2"><img :src="imageRef + portfolioImages[i].img" alt=""></div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title
          ><a href="">{{ userPortfolio.projectTitle }}</a></v-card-title
        >

        <v-card-subtitle>{{ userPortfolio.projectSubtitle }}</v-card-subtitle>
        <v-card-subtitle>{{ "template:" + userPortfolio.template }}</v-card-subtitle>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="@/assets/dummy.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn color="orange lighten-2" text> MORE </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ userPortfolio.projectDescription }}
            </v-card-text>
            <v-card-text>
              <a href="">{{ userPortfolio.projectLinks }}</a>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    </div>
    <!-- --->
    <div v-if="userPortfolio.template == 2">
     <div name="template2" class="col-sm-12">
      <v-card class="mx-auto" max-width="500"
        ><v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title
          ><a href="">{{ userPortfolio.projectTitle }}</a></v-card-title
        >

        <v-card-subtitle>
          <a href=""></a>{{ userPortfolio.projectSubtitle }}</v-card-subtitle
        >
        <v-card-subtitle>{{ "template:" + userPortfolio.template }}</v-card-subtitle>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="@/assets/dummy.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn color="orange lighten-2" text> MORE </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ userPortfolio.projectDescription }}
            </v-card-text>
            <v-card-text>
              <a href="">{{ userPortfolio.projectLinks }}</a>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    </div>
    <!-- --->
    <div v-if="userPortfolio.template == 3">
     <div name="template2" class="col-sm-12">
      <v-card class="mx-auto" max-width="500"
        ><v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title
          ><a href="">{{ userPortfolio.projectTitle }}</a></v-card-title
        >

        <v-card-subtitle>
          <a href=""></a>{{ userPortfolio.projectSubtitle }}</v-card-subtitle
        >
        <v-card-subtitle>{{ "template:" + userPortfolio.template }}</v-card-subtitle>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="@/assets/dummy.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn color="orange lighten-2" text> MORE </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ userPortfolio.projectDescription }}
            </v-card-text>
            <v-card-text>
              <a href="">{{ userPortfolio.projectLinks }}</a>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  props: ["userPortfolio", "portfolioImages"],
  name: "PortfolioComponent",
  data() {
    return {
      show: false,
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      images: [this.image],
      cycle: false,
      imageRef: "data:image/png;base64,",
    };
  },
  mounted() {
    /* this.getUserPortfolio(); */
    
  },
  methods: {
      
  },
};
</script>

<style scoped>
.card img {
  height: auto;
  max-height: 300px;
}

.v-card__text a {
  color: red !important;
  text-decoration: none;
}

.v-card__title a {
  color: #089965 !important;
  text-decoration: none;
}
</style>
