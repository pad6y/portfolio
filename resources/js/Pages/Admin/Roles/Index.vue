<template>
  <admin-layout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-xl text-gray-700 leading-tight">Roles</h2>
        <blue-button
          :href="route('AdminControlPanel.roles.create')"
          class="text-xs"
          v-if="$page.props.auth.can.manageRoles"
          >Create</blue-button
        >
      </div>
    </template>

    <!-- <div class="text-center my-4" v-if="$page.props.success">
      <span class="text-xl bg-blue-700 text-gray-50 p-2 rounded-md shadow-md">
        {{ $page.props.success }}
      </span>
    </div> -->

    <div class="px-0 md:px-6 py-2 text-xs sm:text-sm">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="text-left pl-3">Name</th>
            <th class="text-left pl-3">Created</th>
            <th class="text-right pr-3" v-if="$page.props.auth.can.manageRoles">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(role, index) in roles"
            :key="index"
            class="text-center shadow transition duration-500 ease-in-out transform hover:scale-105"
            :class="{ 'bg-gray-300': index % 2 === 0 }"
          >
            <td class="text-left capitalize py-3 pl-3">{{ role.name }}</td>
            <td class="text-left py-3 pl-3">{{ role.created_at }}</td>
            <td class="md:py-3" v-if="$page.props.auth.can.manageRoles">
              <div class="flex justify-end pr-2">
                <green-button
                  :href="route('AdminControlPanel.roles.show', role.id)"
                  class="sm:text-sm shadow-md"
                  >Edit</green-button
                >
                <form @submit.prevent="submit(role.id)">
                  <jet-danger-button type="submit" class="sm:text-sm ml-1"
                    >Delete</jet-danger-button
                  >
                </form>
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
import JetDangerButton from "@/Jetstream/DangerButton";

export default {
  props: ["roles"],
  data() {
    return {
      // flashMsg: this.$page.props.success,
    };
  },
  components: {
    AdminLayout,
    BlueButton,
    GreenButton,
    JetDangerButton,
  },
  methods: {
    submit(id) {
      this.$inertia.delete(this.route("AdminControlPanel.roles.destroy", id), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "You have successfully deleted role!",
          });
        },
      });
    },
    // Msg() {
    //   if (this.flashMsg) {
    //     setTimeout(function () {
    //       this.flashMsg === null;
    //     }, 5000);
    //     return this.flashMsg;
    //   }
    // },
  },
};
</script>


