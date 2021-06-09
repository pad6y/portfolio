<template>
  <div class="max-w-7xl mx-auto">
    <menu-bar></menu-bar>
    <div class="h-auto p-4 md:p-12 bg-gold-text">
      <slot></slot>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import menuBar from "@/Pages/eCommerce/menuBar";
import FooterSection from "@/Pages/eCommerce/Footer";

export default {
  components: {
    menuBar,
    FooterSection,
  },
};
</script>
