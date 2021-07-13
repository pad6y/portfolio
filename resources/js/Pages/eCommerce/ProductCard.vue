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
      <div
        class="text-xs px-2 py-1 h-14"
        v-text="product.product_description"
      ></div>

      <div class="flex justify-between mt-4">
        <div class="pt-5 pl-4">
          <!-- £ {{ product.product_price.toFixed(2) }} -->
          {{ formatCurrency(product.product_price) }}
        </div>
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
      // price = price / 100;
      return price.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      });
    },
  },
};
</script>
