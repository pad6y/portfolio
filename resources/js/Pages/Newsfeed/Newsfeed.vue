<template>
  <div class="container mx-auto max-w-6xl py-6 px-6 pb-20">
    <div class="font-serif text-3xl text-gray-500 pb-3">NEWSFEED</div>

    <div
      class="grid grid-cols-1 items-center p-10 pb-6 border-2 rounded-lg shadow-lg"
    >
      <div class="font-serif text-gray-600 border-b mb-12">
        <ul class="underline font-bold mb-2">
          <div class="grid grid-cols-2">
            <ul>
              <div class="text-indigo-500">First post title</div>
            </ul>

            <ul class="flex justify-end">
              <div class="text-indigo-500">Pad6y</div>
            </ul>
          </div>
        </ul>

        <div class="text-xs text-gray-300">Published: Date</div>

        <ul class="pt-6 pb-2">
          Body
        </ul>
      </div>

      <inertia-link
        :href="route('login')"
        class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-md text-gray-700 text-center hover:bg-gold-dark"
      >
        Add News Article
      </inertia-link>
    </div>
  </div>
</template>



<style scoped>
</style>

<script>
export default {
  props: {},
  data() {
    return {
      images: [""],
    };
  },
};
</script>
