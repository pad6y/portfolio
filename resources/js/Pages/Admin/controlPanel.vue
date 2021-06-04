<template>
  <admin-layout>
    <template #header>
      <div class="flex justify-center">
        <h2
          class="font-semibold text-2xl text-gray-700 leading-tight tracking-widest"
        >
          Control Panel
        </h2>
      </div>
    </template>

    <div class="px-6 py-2">
      Here is a simple auth roles control panel. Only super-admin and admins
      have the compacity to alter users roles, create roles and delete roles.
      Moderators can see admins and their roles but cannot create edit or
      delete. Developers roles can only see admins and their roles. This page
      should not be visible to normal users or accessed by them.
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
export default {
  components: { AdminLayout },
};
</script>