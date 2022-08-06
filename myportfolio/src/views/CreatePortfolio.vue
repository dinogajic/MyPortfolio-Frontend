<template>
 <v-app>
  <div class="profile">
      <Dialog :alertResponseData="alertResponseData" :dialog="dialog"/>
      <div class="row">
        <div class="col-md-3 border-right p-3 py-5">
          <div class="col-md-12">
            <div>
              Select template:
            </div>
            <select
              class="dropdownBtn shadow-none form-select form-select-lg mb-3 "
              aria-label=".form-select-lg example"
              v-model="templateChoice"
            >
              <option class="dropdown-item" value="1">One</option>
              <option class="dropdown-item" value="2">Two</option>
              <option class="dropdown-item" value="3">Three</option>
            </select>
          </div>
        </div>
        <!-- Option 1 -->
        <div class="col-md-5 border-right" v-if="templateChoice == 1">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Design portfolio</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Project title</label
                ><input
                  required
                  v-model="projectTitle"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Title..."
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Subtitle</label
                ><input
                  required
                  v-model="projectSubtitle"
                  type="text"
                  class="form-control shadow-none"
                  value=""
                  placeholder="Subtitle..."
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Project description</label
                ><textarea
                  required
                  v-model="projectDescription"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Description..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Additional links</label
                ><textarea
                  v-model="projectLinks"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Links..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <v-file-input
                  v-model="files"
                  name="image"
                  accept="image/png"
                  label="Choose images" 
                  multiple
                  @change="loading=false"            
                />
              </div>
              <div class="col-md-12">
                <button @click="createProject" class="rl-cp w-100">Create Portfolio</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Option 2 -->
        <div class="col-md-5 border-right" v-if="templateChoice == 2">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Software portfolio</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Project title</label
                ><input
                  required
                  v-model="projectTitle"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Title..."
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Subtitle</label
                ><input
                  required
                  v-model="projectSubtitle"
                  type="text"
                  class="form-control shadow-none"
                  value=""
                  placeholder="Subtitle..."
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Project description</label
                ><textarea
                  required
                  v-model="projectDescription"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Description..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Additional links</label
                ><textarea
                  v-model="projectLinks"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Links..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <v-file-input
                  v-model="files"
                  name="image"
                  accept="image/png"
                  label="Choose images" 
                  multiple
                  @change="loading=false"            
                />
              </div>
              <div class="col-md-12">
                <button @click="createProject" class="rl-cp w-100">Create Portfolio</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Option 3 -->
        <div class="col-md-5 border-right" v-if="templateChoice == 3">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Photo gallery</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Project title</label
                ><input
                  required
                  v-model="projectTitle"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Title..."
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Subtitle</label
                ><input
                  required
                  v-model="projectSubtitle"
                  type="text"
                  class="form-control shadow-none"
                  value=""
                  placeholder="Subtitle..."
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Project description</label
                ><textarea
                  required
                  v-model="projectDescription"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Description..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Additional links</label
                ><textarea
                  v-model="projectLinks"
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Links..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <v-file-input
                  v-model="files"
                  name="image"
                  accept="image/png"
                  label="Choose images" 
                  multiple
                  @change="loading=false"            
                />
              </div>
              <div class="col-md-12">
                <button @click="createProject" class="rl-cp w-100">Create Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-5">
        <div class="mt-2 text-center"></div>
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
  name: "CreatePortfolio",
  data() {
    return {
      alertResponseData: "",
      projectTitle: "",
      projectSubtitle: "",
      projectDescription: "",
      projectLinks: "",
      templateChoice: "1",
      files: null,
      dialog: false,
    };
  },
  methods: {
    templateDropdown() {
      $(".dropdown-toggle").dropdown();
    },
    async createProject() {
      const data = new FormData();
      data.append("projectTitle", this.projectTitle)
      data.append("projectSubtitle", this.projectSubtitle)
      data.append("projectDescription", this.projectDescription)
      data.append("projectLinks", this.projectLinks)
      data.append("templateChoice", this.templateChoice)
        this.files.forEach(file => {
            data.append("images", file)
        })

      const res = await axios.post(
        "https://my-portfolio-wa.herokuapp.com/portfolio", data)
        .then((response) => {
        if(response) {
          this.alertResponseData = response.data
          this.dialog = true;
          
        } else {
          alert ("Failed to create portfolio")
        }
      })
      
    },
    /* async sendPortfolioImages() {
       const data = new FormData();
        data.append("name", Math.floor(Math.random() * 1000000000001))
        data.append("portfolioName", this.projectTitle)
        
        this.files.forEach(file => {
            data.append("images", file)
        })
        await axios.post("https://my-portfolio-wa.herokuapp.com/portfolio_images", data).then(response => {
          console.log(response)
        })
      
    } */
  },
  components: { Dialog },
};
</script>

<style scoped>
option::selection {
  background-color: #25d294 !important;
}

input:focus {
  border-color: #84e3c1;
}

textarea:focus {
  border-color: #84e3c1;
}

.dropdownBtn {
  cursor: pointer;
  padding: 10px !important;
  color: white !important;
  border-radius: 0px !important;
  border: 1px solid white !important;
  background-color: #089965 !important;
  transition: 0.2s;
}

.dropdownBtn:focus {
  color: #089965 !important;
  background-color: white !important;
  transition: 0.2s;
  border: 1px solid #089965 !important;
}

.dropdown-item {
  color: #089965 !important;
  background-color: white;
}

.rl-cp {
  padding: 10px;
  color: white;
  border: 1px solid white ;
  background-color: #089965 ;
  transition: 0.2s;
}

.rl-cp:hover:enabled {
  border: 1px solid #089965 ;
  color: #089965 ;
  background-color: white ;
  transition: 0.2s;
}

/* Bootstrap */

.form-control {
  border-radius: 0px !important;
}

.col-md-6 {
  padding: 12px !important;
}

.col-md-12 {
  padding: 12px !important;
}
</style>
