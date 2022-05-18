<template>
  <div class="portfolio">
    <div class="container">
      <div class="row">
        <portfolio-component v-for="n in 5" :key="n" :n="n" />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioComponent from "@/components/PortfolioComponent.vue";

export default {
  name: "Portfolio",
  data() {
    return {};
  },
  components: { PortfolioComponent },
};
</script>

<style>
.portfolio {
  padding: 5px;
}

.row > * {
  width: 50% !important;
}

.v-application--wrap {
  min-height: 0;
}

@media (max-width: 992px) {
  .row > * {
    width: 100% !important;
  }
}
</style>
