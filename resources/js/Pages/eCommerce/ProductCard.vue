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
      <div class="text-xs px-2 py-1">
        {{ product.product_description }}
      </div>
      <div class="flex justify-end px-2 py-2">
        £ {{ product.product_price }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["product"],
};
</script>
