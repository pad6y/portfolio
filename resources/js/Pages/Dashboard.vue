<template>
  <div class="bg-gray-200 shadow-xl">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="text-2xl text-gold ml-4">Admin Users Overview</div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="bg-white shadow-xl">
      <admin-user-index :users="users" />
    </div>
  </div>
</template>

<script>
import AdminUserIndex from "@/Pages/Admin/Users/Show.vue";

export default {
  components: {
    AdminUserIndex,
  },
  props: ["users"],
};
</script>
