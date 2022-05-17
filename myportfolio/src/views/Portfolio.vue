<template>
  <div class="portfolio">
    <div class="container">
      <div class="row">
        <portfolio-component />
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
</style>
