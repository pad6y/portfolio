<template>
  <div class="flex justify-center min-h-full">
    <div class="w-full bg-white shadow-md md:my-2 mb-2">
      <img
        :src="product.product_image"
        :alt="'image unavailable'"
        class="w-full object-cover"
      />
      <div class="font-semibold text-sm px-2 py-1">
        {{ product.product_name }}
      </div>
      <div class="text-xs m-2 h-16" v-text="product.product_description"></div>
      <div class="flex justify-between text-xs mt-2 px-2 text-gray-400">
        <div class="">Gender: {{ product.gender }}</div>
        <div class="text-gray-700 font-semibold pr-4 flex justify-end">
          <!-- £ {{ product.product_price.toFixed(2) }} -->
          {{ formatCurrency(product.product_price) }}
        </div>
      </div>

      <div class="flex flex-col sm:justify-between">
        <button
          @click="addItem"
          class="
            border-2 border-gray-400
            px-2
            m-4
            shadow-md
            transition
            duration-500
            ease-in-out
            transform
            hover:scale-110
          "
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["product"],
  emits: ["addItem"],
  // data() {
  //   return {
  //     cart: {
  //       items: [],
  //     },
  //   };
  // },
  methods: {
    addItem() {
      this.$emit("addItem", this.product);
    },
    formatCurrency(price) {
      price = price / 100;
      return price.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      });
    },
  },
};
</script>
