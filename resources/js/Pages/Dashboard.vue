<template>
  <div class="py-12">
    <div class="max-w-full mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <admin-user-index :users="users" />
      </div>
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
