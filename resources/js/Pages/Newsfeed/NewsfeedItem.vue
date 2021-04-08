<template>
  <div class="font-serif text-gray-600 border-b mb-12">
    <div class="grid grid-cols-2 font-bold">
      <div class="text-gold">{{ post.title }}</div>
      <div class="flex justify-end text-gold mr-2">
        {{ post.user.name }}
      </div>
    </div>

    <div class="flex justify-end text-xs text-gray-400">
      Published: {{ post.created_at }}
    </div>

    <div class="pt-6 pb-2">{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>