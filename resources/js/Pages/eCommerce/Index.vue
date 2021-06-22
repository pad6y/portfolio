<template>
  <e-com-layout>
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
          <product-card :product="productItem"></product-card>
        </div>
      </div>
    </infinite-scroll>
  </e-com-layout>
</template>

<script>
import eComLayout from "@/Layouts/eComLayout";
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
  },
  computed: {
    pagination() {
      return (this.allProducts = this.products);
    },
  },
  methods: {
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
  
