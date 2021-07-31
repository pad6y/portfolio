<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-center bg-gray-400 uppercase py-1">
      <inertia-link
        :href="route('eCommerce.adminPanel')"
        class="px-4 md:px-2 text-sm"
        :class="
          route().current('eCommerce.adminPanel')
            ? 'text-gray-50'
            : 'hover:text-gray-50'
        "
        >Add Product</inertia-link
      >

      <inertia-link
        :href="route('product.index')"
        class="px-4 md:px-2 text-sm"
        :class="
          route().current('product.index')
            ? 'text-gray-50'
            : 'hover:text-gray-50'
        "
        >Manage Products</inertia-link
      >

      <inertia-link
        :href="route('eCommerce.orders')"
        class="px-4 md:px-2 text-sm"
        :class="
          route().current('eCommerce.orders')
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