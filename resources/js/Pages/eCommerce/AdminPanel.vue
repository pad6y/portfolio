<template>
  <e-com-layout :links="footerLinks">
    <ecommerces-admin-header>
      <template #title>Admin Control Panel</template>
    </ecommerces-admin-header>
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
import HelpInfo from "@/Pages/eCommerce/HelpInfo";
import More from "@/Pages/eCommerce/More";
import About from "@/Pages/eCommerce/About";
import EcommercesAdminHeader from "../../Components/EcommercesAdminHeader.vue";

export default {
  props: { footerLinks: Array },
  components: {
    eComLayout,
    AddProduct,
    HelpInfo,
    More,
    About,
    EcommercesAdminHeader,
  },
};
</script>

