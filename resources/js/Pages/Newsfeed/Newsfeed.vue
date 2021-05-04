<template>
  <div class="container mx-auto max-w-6xl pr-2 py-6 md:px-6 md:pb-52">
    <div class="relative font-serif text-3xl text-gray-500 pb-3">NEWSFEED</div>

    <div class="flex justify-end">
      <inertia-link
        :href="route('newsfeed.create')"
        class="border-2 rounded-md mt-6 px-4 py-2 font-serif text-lg shadow-md text-gray-700 text-center bg-gold-text hover:bg-gold-dark"
      >
        Add News Article
      </inertia-link>
    </div>

    <div
      class="grid grid-cols-1 p-8 md:border-2 md:rounded-lg md:shadow-lg py-4"
    >
      <div v-for="(post, index) in posts" :key="index">
        <newsfeed-item :post="post" />
      </div>

      <div class="flex justify-center">
        <inertia-link
          :href="route('newsfeed.create')"
          class="border-2 rounded-md mt-6 px-4 py-2 font-serif text-lg shadow-md text-gray-700 text-center bg-gold-text hover:bg-gold-dark"
        >
          Add News Article
        </inertia-link>
      </div>
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
