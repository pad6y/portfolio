<template>
  <div class="max-w-7xl mx-auto">
    <div class="bg-gold-text">
      <slot></slot>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import FooterSection from "@/Pages/eCommerce/Footer";

export default {
  components: {
    FooterSection,
  },
};
</script>
