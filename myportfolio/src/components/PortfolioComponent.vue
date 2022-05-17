 <template>
  <div class="col-sm-6 card-container">
    <v-card class="mx-auto" max-width="450"
      ><!-- 
      <v-img src="@/assets/bevidence.png" height="auto"></v-img> -->
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>

      <v-card-title><a href="">Bevidence</a></v-card-title>

      <v-card-subtitle> <a href=""></a>HR management</v-card-subtitle>

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
</template>
 
<script>
export default {
  name: "PortfolioComponent",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.card img {
  height: auto;
  max-height: 300px;
}

.card a {
  color: green !important;
}

.v-card__title a {
  color: green !important;
  text-decoration: none;
}

.v-card__text a {
  color: green !important;
  text-decoration: none;
}
</style>
