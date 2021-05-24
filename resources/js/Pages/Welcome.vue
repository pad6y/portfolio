<template>
  <div class="w-screen">
    <div class="grid sm:grid-cols-2 md:gap-20 items-center md:p-16 md:pb-14">
      <div
        class="grid grid-cols-1 justify-items-center sm:justify-items-end font-serif text-gold"
      >
        <div
          class="min-w-min border-b-4 border-black pt-6 pb-6 text-6xl md:text-7xl"
        >
          Pad6y
        </div>
        <div class="flex justify-end text-4xl lg:text-5xl text-gray-500 pt-2">
          portfolio
        </div>
      </div>

      <div class="grid justify-center xl:justify-start border-l-2">
        <div v-if="canLogin" class="px-6 mt-6 xl:ml-20 xl:mt-10 py-4 sm:block">
          <inertia-link
            v-if="$page.props.user"
            :href="route('dashboard')"
            class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-lg text-gray-700 bg-gold-text hover:bg-gold-md hover:ring-yellow-200 hover:ring-opacity-50"
          >
            Dashboard
          </inertia-link>

          <template v-else>
            <div class="grid gap-5">
              <inertia-link
                :href="route('login')"
                class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-md text-gray-700 text-center bg-gradient-to-r from-gold-text to-yellow-400"
              >
                <span class="animate-pulse">Log in</span>
              </inertia-link>

              <inertia-link
                v-if="canRegister"
                :href="route('register')"
                class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-md text-gray-700 bg-gradient-to-r from-gold-text to-yellow-400"
              >
                <span class="animate-pulse">Register</span>
              </inertia-link>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="grid grid-cols-5 md:mx-28 min-h-full">
      <div class="col-span-3 bg-gradient-to-t from-gold-text to-white">
        <content-one></content-one>
      </div>
      <div class="col-span-2 bg-gradient-to-t from-gold-text to-white">
        right
      </div>
    </div>

    <div
      class="flex justify-center items-center md:mx-28 md:h-28 bg-gradient-to-t from-gray-400 to-gold-text"
    >
      Contact Form
    </div>

    <div
      class="flex justify-center items-end md:mx-28 md:h-44 bg-gradient-to-t from-white to-gray-400"
    >
      Icons
    </div>
    <!-- <div class="flex justify-end mt-4 mr-4">
      <div class="font-serif text-gray-400 text-xs">
        Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
      </div>
    </div> -->

    <!-- copyright trademark -->

    <div
      class="flex justify-center font-serif text-xs text-gray-600 mt-12 mb-6"
    >
      © {{ new Date().getFullYear() }} by Padby.com All rights reserved.
    </div>
  </div>
</template>



<script>
import contentOne from "@/Pages/Landing/contentOne";
export default {
  components: {
    contentOne,
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
};
</script>
