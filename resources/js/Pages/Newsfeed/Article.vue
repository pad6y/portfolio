<template>
  <div class="max-h-full flex justify-center items-center font-serif text-md">
    <div class="bg-gray-200 mt-16 mb-24 w-full md:w-4/5 shadow-md">
      <div class="grid justify-items-end text-gray-700 mt-2 mr-2 mb-2">
        By {{ user.name }}
      </div>
      <div class="text-gold text-lg ml-2 mb-4">
        {{ post.title }}
      </div>

      <div class="md:grid md:grid-cols-8">
        <div class="md:col-span-5 mb-2 ml-2 md:ml-6 xl:h-2/3 text-gray-800">
          {{ post.body }}
        </div>

        <div
          v-if="post.post_image"
          class="md:col-span-3 md:grid md:justify-items-end rounded"
        >
          <img
            :src="post.post_image"
            alt="image unavailable"
            class="object-contain h-auto w-full object-center md:object-right mb-4 sm:mr-4 border sm:rounded-lg"
          />
        </div>
      </div>

      <div class="text-xs text-gray-600 flex justify-end mb-2 mr-2">
        Published at {{ post.created_at }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["post", "user"],
};
</script>