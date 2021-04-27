<template>
  <div class="grid grid-cols-2 border-b pt-4 pb-4 text-gray-700 text-xs">
    <div class="text-black font-bold">
      Name :
      <span class="ml-2 font-normal text-indigo-700 underline">
        <inertia-link :href="route('user.show', user.id)">
          {{ user.name }}
        </inertia-link> </span
      ><br />
      Email:
      <span class="ml-2 text-gray-600 font-normal">{{ user.email }}</span
      ><br />
      Role:
      <span class="ml-2 text-gray-600 font-normal">Role</span><br />
    </div>

    <div class="text-black font-bold">
      Posts :
      <div v-for="(post, index) in posts" :key="index">
        <div
          v-if="user.id === post.user_id"
          class="text-gray-600 font-normal ml-12"
        >
          <inertia-link
            :href="route('newsfeed.show', post.id)"
            class="text-indigo-700 hover:text-green-700 underline"
          >
            {{ post.title }}
          </inertia-link>
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