<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-center bg-gray-200">
      <button
        @click="filter('')"
        class="
          border-2 border-gold-text
          bg-white
          px-7
          py-2
          m-4
          shadow-md
          transition
          duration-500
          ease-in-out
          transform
          hover:scale-110
        "
      >
        All
      </button>
      <button
        @click="filter('male')"
        class="
          border-2 border-gold-text
          bg-white
          px-5
          py-2
          m-4
          shadow-md
          transition
          duration-500
          ease-in-out
          transform
          hover:scale-110
        "
      >
        Mens
      </button>
      <button
        @click="filter('female')"
        class="
          border-2 border-gold-text
          bg-white
          px-2
          py-2
          m-4
          shadow-md
          transition
          duration-500
          ease-in-out
          transform
          hover:scale-110
        "
      >
        Womens
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    filter(term) {
      this.$inertia.get("/eCommerce?term=" + term, {
        preserveState: true,
        replace: true,
      });
    },
  },
};
</script>
