<template>
  <e-com-layout :links="footerLinks">
    <ecommerces-admin-header>
      <template #title>
        <div class="mr-24">Admin Control Panel - Manage Products</div>
      </template>
    </ecommerces-admin-header>
    <admin-sub-menu />
    <div class="w-full lg:w-4/5 md:mx-auto">Manage Products</div>
  </e-com-layout>
</template>

<script>
import eComLayout from "@/Layouts/eComLayout";
import AddProduct from "@/Pages/eCommerce/AddProduct";
import AdminSubMenu from "@/Pages/eCommerce/SubMenus/AdminSubMenu";
import HelpInfo from "@/Pages/eCommerce/FooterSection/HelpInfo";
import More from "@/Pages/eCommerce/FooterSection/More";
import About from "@/Pages/eCommerce/FooterSection/About";
import EcommercesAdminHeader from "@/Components/EcommercesAdminHeader.vue";

export default {
  props: { footerLinks: Array },
  components: {
    eComLayout,
    AddProduct,
    HelpInfo,
    More,
    About,
    EcommercesAdminHeader,
    AdminSubMenu,
  },
};
</script>