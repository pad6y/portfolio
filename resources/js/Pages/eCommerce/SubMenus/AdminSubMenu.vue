<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-center bg-gray-400 uppercase py-1">
      <inertia-link
        :href="route('eCommerce.adminPanel')"
        class="px-4 md:px-2"
        :class="
          route().current('eCommerce.adminPanel')
            ? 'text-gray-50'
            : 'hover:text-gray-50'
        "
        >Add Product</inertia-link
      >

      <inertia-link
        :href="route('product.index')"
        class="px-4 md:px-2"
        :class="
          route().current('product.index')
            ? 'text-gray-50'
            : 'hover:text-gray-50'
        "
        >Manage Products</inertia-link
      >

      <inertia-link
        :href="route('eCommerce.index')"
        class="px-4 md:px-2"
        :class="
          route().current('eCommerce.index')
            ? 'text-gray-50'
            : 'hover:text-gray-50'
        "
        >All Orders</inertia-link
      >
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>