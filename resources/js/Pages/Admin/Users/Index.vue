<template>
  <admin-layout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-xl text-gray-700 leading-tight">Users</h2>
      </div>
    </template>

    <!-- <div class="text-center my-4" v-if="$page.props.success">
      <span class="text-xl bg-blue-700 text-gray-50 p-2 rounded-md shadow-md">
        {{ $page.props.success }}
      </span>
    </div> -->

    <div class="px-6 py-2 text-xs sm:text-sm">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="text-left pl-3">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Created</th>
            <th class="text-right pr-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="text-center hover:bg-gold-dark hover:text-gray-50"
            :class="{ 'bg-gray-300': index % 2 === 0 }"
          >
            <td class="text-left capitalize py-3 pl-3">{{ user.name }}</td>
            <td class="text-left capitalize py-3">{{ user.email }}</td>
            <td class="text-left py-3">{{ user.created_at }}</td>
            <td class="py-3">
              <div class="flex justify-end pr-2">
                <green-button
                  :href="route('users.show', user.id)"
                  class="sm:text-sm shadow-md"
                  >Edit
                </green-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import BlueButton from "@/Components/BlueButton";
import GreenButton from "@/Components/GreenButton";

export default {
  props: ["users"],
  data() {
    return {
      // flashMsg: this.$page.props.success,
    };
  },
  components: {
    AdminLayout,
    BlueButton,
    GreenButton,
  },
};
</script>