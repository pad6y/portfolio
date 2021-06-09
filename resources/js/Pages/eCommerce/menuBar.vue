<template>
  <div class="">
    <div class="flex justify-between h-16 p-4 pb-8 bg-gray-100">
      <div class="flex-shrink-0 flex items-center relative">
        <inertia-link :href="route('landing')">
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
      <div class="hidden md:flex text-gray-500 ml-4 sm:ml-20 mt-1 w-2/3">
        Search
      </div>
      <div class="text-gray-500 mr-2 sm:mr-4 md:ml-36 mt-1">
        <icons :name="'account'"></icons>
      </div>
      <div class="text-gray-500 sm:mr-4 mt-1">
        <icons :name="'cart'"></icons>
      </div>
    </div>

    <div class="flex items-center bg-gray-700 h-10 text-gray-100 pl-2">
      product query menu
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