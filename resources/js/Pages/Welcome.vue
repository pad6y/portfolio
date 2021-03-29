<template>
  <div class="container mx-auto max-w-6xl py-80 px-6">
    <div
      class="grid grid-cols-2 gap-10 items-center p-16 pb-24 border-2 rounded-lg shadow-lg"
    >
      <div class="font-serif text-7xl md:text-9xl text-gold">Pad6y</div>

      <div class="flex justify-center">
        <div v-if="canLogin" class="hidden px-6 py-4 sm:block">
          <inertia-link
            v-if="$page.props.user"
            href="/dashboard"
            class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-lg text-gray-700 hover:bg-gold-dark hover:ring-yellow-200 hover:ring-opacity-50"
          >
            Dashboard
          </inertia-link>

          <template v-else>
            <div class="grid gap-5">
              <inertia-link
                :href="route('login')"
                class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-md text-gray-700 text-center hover:bg-gold-dark"
              >
                Log in
              </inertia-link>

              <inertia-link
                v-if="canRegister"
                :href="route('register')"
                class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-md text-gray-700 hover:bg-gold-dark"
              >
                Register
              </inertia-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute right-10">
    <div class="font-serif text-gray-400 text-xs">
      Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
    </div>
    <!-- </div> -->
  </div>
</template>



<style scoped>
/* .background {
  background-image: url(/storage/images/profile.png);
} */
</style>

<script>
export default {
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
  data() {
    return {
      images: [""],
    };
  },
};
</script>
