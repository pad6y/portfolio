<template>
  <e-com-layout :links="footerLinks">
    <template #title>
      <search-bar-header
        @termChange="onTermChange"
        @removeItem="removeFromCart"
        :cart="this.cart"
      ></search-bar-header>
    </template>
    <filter-menu></filter-menu>
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
            @addItem="addToCart"
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
import searchBarHeader from "@/Pages/eCommerce/searchBarHeader";
import FilterMenu from "@/Pages/eCommerce/SubMenus/FilterMenu";
import ProductCard from "@/Pages/eCommerce/ProductCard";
import InfiniteScroll from "@/Components/InfiniteScroll";

export default {
  props: ["products", "footerLinks"],

  data() {
    return {
      allProducts: this.products,
      cart: {
        items: [],
      },
    };
  },
  components: {
    eComLayout,
    ProductCard,
    InfiniteScroll,
    searchBarHeader,
    FilterMenu,
  },
  computed: {
    // cart: localStorage.getItem("cart"),
    pagination() {
      return (this.allProducts = this.products);
    },
  },
  created() {
    this.cart.items = JSON.parse(localStorage.getItem("cart") || "[]");
  },
  methods: {
    addToCart(data) {
      let productInCartIndex = this.cart.items.findIndex(
        (item) => item.product_name === data.product_name
      );

      if (productInCartIndex !== -1) {
        // data.qty++;
        this.cart.items[productInCartIndex].qty++;
        localStorage.setItem("cart", JSON.stringify(this.cart.items));
        return;
      }
      data.qty = 1;

      this.cart.items.push(data);
      // console.log(this.cart.items);
      localStorage.setItem("cart", JSON.stringify(this.cart.items));
    },
    removeFromCart(index) {
      this.cart.items.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart.items));
    },
    onTermChange: function (searchTerm) {
      this.$inertia.get("/eCommerce?term=" + searchTerm, {
        preserveState: true,
        replace: true,
      });
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
  
