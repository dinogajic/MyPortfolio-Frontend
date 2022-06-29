<template>
  <div class="profile">
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            DROPDOWN
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Portfolio Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Project title</label
                ><input
                  required
                  v-model="projectTitle"
                  type="text"
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
                  placeholder="Description..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Additional links</label
                ><textarea
                  required
                  v-model="projectLinks"
                  type="text"
                  class="form-control"
                  placeholder="Links..."
                  rows="6"
                />
              </div>
              <div class="col-md-12">
                <button @click="createProject">123123</button>
              </div>
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
</template>
<script>
import axios from "axios";

export default {
  name: "CreatePortfolio",
  data() {
    return {
      projectTitle: "",
      projectSubtitle: "",
      projectDescription: "",
      projectLinks: "",
    };
  },
  methods: {
    async createProject() {
      const res = await axios.post(
        "https://my-portfolio-wa.herokuapp.com/portfolio",
        {
          projectTitle: this.projectTitle,
          projectSubtitle: this.projectSubtitle,
          projectDescription: this.projectDescription,
          projectLinks: this.projectLinks,
        }
      );
      alert("Portfolio created");
    },
  },
};
</script>
