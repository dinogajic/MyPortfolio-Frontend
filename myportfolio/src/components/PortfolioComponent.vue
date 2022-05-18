<template>
  <v-app>
    <div class="col-sm-12">
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

        <v-card-title><a href="">Bevidence</a></v-card-title>

        <v-card-subtitle> <a href=""></a>HR management</v-card-subtitle>
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
              Web aplikaciju će koristiti razna poduzeća kako bi si vlasnici
              olakšali vođenje evidencije podataka o radnicima. Aplikacija će
              sadržavati sustav registracije korisnika (vlasnik poduzeća).
              Korisnik (vlasnik poduzeća) će imati posebno sučelje (dashboard)
              gdje će obavljati funkcije upravljanja poduzećem npr. registracija
              poduzeća (mogućnost registracije više poduzeća), dodavanje novih
              radnika, evidencija radnih sati, evidencija godišnjih odmora i
              ostalih odsustva sa posla, izračun plaća sa svim dodatcima..
            </v-card-text>
            <v-card-text>
              <a href="">Git</a>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
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
      cycle: false,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style>
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
