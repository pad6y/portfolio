<template>
  <div class="max-w-7xl mx-auto">
    <menu-bar></menu-bar>
    <div class="bg-gold-text py-2">
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
