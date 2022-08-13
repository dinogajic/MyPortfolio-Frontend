<template>
  <v-app>
    <div v-if="userPortfolio.template == 1">
    <div name="template1" class="col-sm-12">
      <v-card class="mx-auto" max-width="500"
        >
       
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item  v-for="(image, i) in images" :key="i" >
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  <v-img :src="imageRef + image.data" 
                  max-height="400"
                  max-width="500" 
                  contain/>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title
          >{{ userPortfolio.designPortfolioTitle }}</v-card-title
        >
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="imageRef + userImage"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-for="(user, i) in userData" :key="i">{{ user.firstName + " " + user.lastName }}</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn color="green" text> MORE </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ userPortfolio.designPortfolioDescription }}
            </v-card-text>
            <v-card-text>
              {{ userPortfolio.designPortfolioLinks }}
            </v-card-text>
          </div>
        </v-expand-transition>
        <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card-actions>
          <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
          >
            UDPATE PORTFOLIO
          </v-btn>
          <v-btn
            color="red"
            dark
            @click="deletePortfolio(userPortfolio._id)"
          >
            DELETE PORTFOLIO
          </v-btn>
        </v-card-actions>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Project title"
                  v-model="userPortfolio.designPortfolioTitle"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  label="Project description"
                  v-model="userPortfolio.designPortfolioDescription"
                  required
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Project links"
                  v-model="userPortfolio.designPortfolioLinks"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-file-input
                  v-model="files"
                  name="image"
                  accept="image/png"
                  label="Choose images" 
                  multiple          
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false;editPortfolio(userPortfolio._id)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-card>
    </div>
    </div>
    <!-- --->
    <div v-if="userPortfolio.template == 2">
    <div name="template1" class="col-sm-12">
      <v-card class="mx-auto" max-width="500"
        >
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item  v-for="(image, i) in images" :key="i" >
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  <v-img :src="imageRef + image.data" 
                  max-height="400"
                  max-width="500" 
                  contain/>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title
          >{{ userPortfolio.softwarePortfolioTitle }}</v-card-title
        >
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="imageRef + userImage"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-for="(user, i) in userData" :key="i">{{ user.firstName + " " + user.lastName }}</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn color="green" text> MORE </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ userPortfolio.softwarePortfolioDescription }}
            </v-card-text>
            <v-card-text>
              <a @click="openLink()"><i class="fa-brands fa-github fa-2xl"></i></a>
            </v-card-text>
          </div>
        </v-expand-transition>
        <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card-actions>
          <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
          >
            UDPATE PORTFOLIO
          </v-btn>
          <v-btn
            color="red"
            dark
            @click="deletePortfolio(userPortfolio._id)"
          >
            DELETE PORTFOLIO
          </v-btn>
        </v-card-actions>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Project title"
                  v-model="userPortfolio.softwarePortfolioTitle"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  label="Project description"
                  v-model="userPortfolio.softwarePortfolioDescription"
                  required
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Project links"
                  v-model="userPortfolio.softwarePortfolioLinks"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-file-input
                  v-model="files"
                  name="image"
                  accept="image/png"
                  label="Choose images" 
                  multiple          
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false;editPortfolio(userPortfolio._id)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-card>
    </div>
    </div>
    <!-- --->
    <div v-if="userPortfolio.template == 3">
    <div name="template1" class="col-sm-12">
      <v-card class="mx-auto" max-width="500"
        >
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item  v-for="(image, i) in images" :key="i" >
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  <v-img :src="imageRef + image.data" 
                  max-height="400"
                  max-width="500" 
                  contain/>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card-title
          >{{ userPortfolio.photoGalleryTitle }}</v-card-title
        >
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="imageRef + userImage"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-for="(user, i) in userData" :key="i">{{ user.firstName + " " + user.lastName }}</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn color="green" text> MORE </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ userPortfolio.photoGalleryDescription }}
            </v-card-text>
          </div>
        </v-expand-transition>
        <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card-actions>
          <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
          >
            UDPATE PORTFOLIO
          </v-btn>
          <v-btn
            color="red"
            dark
            @click="deletePortfolio(userPortfolio._id)"
          >
            DELETE PORTFOLIO
          </v-btn>
        </v-card-actions>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Project title"
                  v-model="userPortfolio.photoGalleryTitle"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  label="Project description"
                  v-model="userPortfolio.photoGalleryDescription"
                  required
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
              >
                <v-file-input
                  v-model="files"
                  name="image"
                  accept="image/png"
                  label="Choose images" 
                  multiple          
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false;editPortfolio(userPortfolio._id)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-card>
    </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios"

export default {
  props: ["userPortfolio", "userData", "userImage"],
  name: "PortfolioComponent",
  data() {
    return {
      show: false,
      images: this.userPortfolio.imagesArray,
      cycle: false,
      imageRef: "data:image/png;base64,",
      dialog: false,
      files: null,
    };
  },
  mounted() {

  },
  methods: {
    async openLink(){
      window.open("https://" + this.userPortfolio.softwarePortfolioLinks);
    },
    async editPortfolio(id) {
        const data = new FormData();
          data.append("projectTitle", this.userPortfolio.projectTitle)
          data.append("projectSubtitle", this.userPortfolio.projectSubtitle)
          data.append("projectDescription", this.userPortfolio.projectDescription)
          data.append("projectLinks", this.userPortfolio.projectLinks)
          data.append("templateChoice", this.userPortfolio.template)
          this.files.forEach(file => {
              data.append("images", file)
          })
        const response = await axios.patch("https://my-portfolio-wa.herokuapp.com/portfolio/" + id, data)

        this.$router.go()
    },
    async deletePortfolio(id) {
        await axios.delete("https://my-portfolio-wa.herokuapp.com/portfolio/" + id).then((response) => {
          
        })
        this.$router.go()
    },
  },
};
</script>

<style scoped>

a i {
  color: #089965;
  transition: 0.2s;
}

a i:hover {
  opacity: 0.6;
}

</style>
