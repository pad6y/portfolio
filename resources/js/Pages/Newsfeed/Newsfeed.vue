<template>
  <div class="container mx-auto max-w-6xl py-6 px-6 pb-20">
    <div class="font-serif text-3xl text-gray-500 pb-3">NEWSFEED</div>

    <div
      class="grid grid-cols-1 items-center p-10 pb-6 border-2 rounded-lg shadow-lg"
    >
      <newsfeed-item />
      <inertia-link
        :href="route('newsfeed.store')"
        class="border-2 rounded-md px-4 py-2 font-serif text-lg shadow-md text-gray-700 text-center hover:bg-gold-dark"
      >
        Add News Article
      </inertia-link>
    </div>
  </div>
</template>



<script>
import NewsfeedItem from "./NewsfeedItem";

export default {
  components: { NewsfeedItem },
};
</script>
