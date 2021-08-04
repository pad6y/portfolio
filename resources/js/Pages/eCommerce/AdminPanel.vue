<template>
  <e-com-layout :links="footerLinks">
    <template #title>
      <div class="text-base md:text-3xl md:mr-24">Add Products and links</div>
    </template>

    <div class="w-full lg:w-4/5 md:mx-auto">
      <add-product></add-product>
      <help-info></help-info>
      <more></more>
      <about></about>
    </div>
  </e-com-layout>
</template>

<script>
import eComLayout from "@/Layouts/eComLayout";
import AddProduct from "@/Pages/eCommerce/AddProduct";

import HelpInfo from "@/Pages/eCommerce/FooterSection/HelpInfo";
import More from "@/Pages/eCommerce/FooterSection/More";
import About from "@/Pages/eCommerce/FooterSection/About";

export default {
  props: { footerLinks: Array },
  components: {
    eComLayout,
    AddProduct,
    HelpInfo,
    More,
    About,
  },
};
</script>

