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

      <!-- Search bar -->

      <div class="flex text-gray-500 ml-4 sm:ml-20 mt-1 w-2/3">
        <input
          @input="onInput"
          id="search"
          type="text"
          placeholder="Search Products"
          class="
            block
            w-full
            h-8
            pl-10
            border-2 border-yellow-300
            rounded-full
            shadow-md
            focus:border-yellow-300
            focus:ring-transparent
          "
        />
        <i class="absolute active:hidden p-1 ml-2"
          ><icons :name="'search'"></icons
        ></i>
      </div>
      <div class="text-gray-500 mr-2 sm:mr-4 md:ml-36 mt-1">
        <icons :name="'account'"></icons>
      </div>
      <div class="text-gray-500 sm:mr-4 mt-1">
        <icons :name="'cart'"></icons>
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
  methods: {
    onInput: function (event) {
      this.$emit("termChange", event.target.value);
    },
  },
};
</script>