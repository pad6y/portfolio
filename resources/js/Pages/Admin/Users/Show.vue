<template>
  <div class="container mx-auto max-w-6xl py-6 px-6 pb-20 font-serif">
    <div class="text-3xl text-gray-500 pb-3">Admin Overview</div>

    <div
      class="grid grid-cols-1 items-center p-8 pb-12 border-2 rounded-lg shadow-lg"
    >
      <h2 class="font-serif text-gold font-bold pb-2">
        Current registered users and their posts:
      </h2>

      <div v-for="(user, index) in users" :key="index">
        <users-details :user="user" :posts="posts"></users-details>
      </div>
    </div>
  </div>
</template>

<script>
import UsersDetails from "./UsersDetails";

export default {
  components: {
    UsersDetails,
  },
  props: ["users", "posts"],
};
</script>