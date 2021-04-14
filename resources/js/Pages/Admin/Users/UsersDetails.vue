<template>
  <div class="grid grid-cols-2 border-b pt-4 pb-4 text-gray-700 text-xs">
    <div class="text-black font-bold">
      Name : <span class="ml-2 text-gray-600 font-normal">{{ user.name }}</span
      ><br />
      Email:
      <span class="ml-2 text-gray-600 font-normal">{{ user.email }}</span>
    </div>

    <div class="text-black font-bold">
      Posts :
      <div v-for="(post, index) in posts" :key="index">
        <div v-if="user.id === post.user_id" class="text-gray-600 font-normal">
          {{ post.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "posts"],
};
</script>