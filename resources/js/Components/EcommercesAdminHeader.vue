<template>
  <div class="">
    <div class="flex justify-between h-16 p-4 pb-8 bg-gray-100">
      <div class="flex-shrink-0 flex items-center relative">
        <inertia-link :href="route('newsfeed.index')">
          <jet-application-mark class="block h-9 w-auto" />
          <div
            class="
              absolute
              bottom-0
              top-3
              left-1
              items-end
              text-gray-500 text-lg
            "
          >
            Ecommerce
          </div>
        </inertia-link>
      </div>

      <!-- Main header -->

      <div
        class="
          flex
          justify-center
          text-xl
          sm:text-2xl
          font-semibold
          sm:font-bold
          text-gray-600
          sm:mr-24
          mt-1
          w-full
        "
      >
        <slot name="title"></slot>
      </div>
    </div>

    <!-- SUB Nav Bar -->

    <div
      class="
        flex
        justify-center
        items-center
        bg-gray-700
        h-10
        uppercase
        text-xs
        sm:text-lg
        text-gray-100
      "
    >
      <inertia-link
        :href="route('eCommerce.index')"
        class="p-4 md:p-2"
        :class="
          route().current('eCommerce.index')
            ? 'text-gray-50 bg-gray-500'
            : 'hover:text-gray-50 hover:bg-gray-500'
        "
        >All Products</inertia-link
      >
      <div class="p-2 hover:bg-gray-500">Mens</div>
      <div class="p-2 hover:bg-gray-500">Womens</div>
      <inertia-link
        :href="route('eCommerce.adminPanel')"
        class="p-4 md:p-2"
        :class="
          route().current('eCommerce.adminPanel')
            ? 'text-gray-50 bg-gray-500'
            : 'hover:text-gray-50 hover:bg-gray-500'
        "
        >Admin Panel</inertia-link
      >
    </div>
  </div>
</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import Icons from "@/Components/Icons";

export default {
  components: {
    JetApplicationMark,
    Icons,
  },

  inheritAttrs: false,
};
</script>