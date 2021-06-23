<template>
  <e-com-layout>
    <menu-bar @termChange="onTermChange"></menu-bar>
    <infinite-scroll @loadMore="loadMoreProducts">
      <div
        class="
          grid grid-cols-2
          md:grid-cols-4
          gap-4
          md:gap-6
          px-2
          md:px-6
          md:py-6
        "
      >
        <div v-for="(productItem, index) in allProducts.data" :key="index">
          <product-card
            :product="productItem"
            :pagination="pagination"
          ></product-card>
        </div>
      </div>
    </infinite-scroll>
  </e-com-layout>
</template>

<script>
import eComLayout from "@/Layouts/eComLayout";
import menuBar from "@/Pages/eCommerce/menuBar";
import ProductCard from "@/Pages/eCommerce/ProductCard";
import InfiniteScroll from "@/Components/InfiniteScroll";

export default {
  props: ["products"],
  data() {
    return {
      allProducts: this.products,
    };
  },
  components: {
    eComLayout,
    ProductCard,
    InfiniteScroll,
    menuBar,
  },
  computed: {
    pagination() {
      return (this.allProducts = this.products);
    },
  },
  methods: {
    onTermChange: function (searchTerm) {
      console.log(searchTerm);
      this.$inertia.get(
        "/eCommerce?term=" + searchTerm,
        {},
        {
          preserveState: true,
          replace: true,
        }
      );
    },
    loadMoreProducts() {
      if (!this.allProducts.next_page_url) {
        return;
      }
      return axios.get(this.allProducts.next_page_url).then((resp) => {
        this.allProducts = {
          ...resp.data,
          data: [...this.allProducts.data, ...resp.data.data],
        };
      });
    },
  },
};
</script>
  
