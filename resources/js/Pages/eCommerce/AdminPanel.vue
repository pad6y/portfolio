<template>
  <e-com-layout>
    <menu-bar @termChange="onTermChange"></menu-bar>
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
import menuBar from "@/Pages/eCommerce/menuBar";
import AddProduct from "@/Pages/eCommerce/AddProduct";
import HelpInfo from "@/Pages/eCommerce/HelpInfo";
import More from "@/Pages/eCommerce/More";
import About from "@/Pages/eCommerce/About";

export default {
  components: {
    menuBar,
    eComLayout,
    AddProduct,
    HelpInfo,
    More,
    About,
  },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    onTermChange: function (searchTerm) {
      this.term = searchTerm;
    },
  },
};
</script>

