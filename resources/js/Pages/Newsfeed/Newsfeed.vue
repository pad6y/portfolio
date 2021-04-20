<template>
  <div class="container mx-auto max-w-6xl py-6 px-6 pb-20">
    <div class="font-serif text-3xl text-gray-500 pb-3">NEWSFEED</div>

    <div
      class="grid grid-cols-1 items-center p-8 pb-6 border-2 rounded-lg shadow-lg"
    >
      <div v-for="(post, index) in posts" :key="index">
        <newsfeed-item :post="post" />
      </div>

      <inertia-link
        :href="route('newsfeed.create')"
        class="flex justify-self-center border-2 rounded-md mt-6 px-4 py-2 font-serif text-lg shadow-md text-gray-700 text-center bg-gold-text hover:bg-gold-dark"
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
  props: ["posts"],
};
</script>
