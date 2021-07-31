<template>
  <div class="max-w-7xl mx-auto">
    <div class="bg-gold-text">
      <ecommerces-admin-header>
        <template #title>
          <slot name="title"></slot>
        </template>
      </ecommerces-admin-header>

      <admin-sub-menu />

      <slot></slot>
    </div>
    <footer-section :links="links"></footer-section>
  </div>
</template>

<script>
import FooterSection from "@/Pages/eCommerce/Footer";
import EcommercesAdminHeader from "@/Components/EcommercesAdminHeader.vue";
import AdminSubMenu from "@/Pages/eCommerce/SubMenus/AdminSubMenu";

export default {
  props: ["links"],
  components: {
    FooterSection,
    EcommercesAdminHeader,
    AdminSubMenu,
  },
};
</script>


