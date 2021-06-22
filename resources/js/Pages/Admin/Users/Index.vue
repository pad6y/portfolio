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

    <div class="px-6 mb-2">
      <label for="search">Search Users</label>
      <input
        id="search"
        type="text"
        v-model="term"
        @keyup="search"
        class="ml-2 px-2 py-1 text-sm rounded border"
        placeholder="Enter users name"
      />
    </div>

    <div class="md:px-6 py-2 text-xs sm:text-sm">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="text-left pl-3">Name</th>
            <th class="hidden sm:table-cell text-left">Email</th>
            <th class="hidden sm:table-cell text-left">Created</th>
            <th class="text-right pr-3" v-if="$page.props.auth.can.manageUsers">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="
              text-center
              shadow
              transition
              duration-500
              ease-in-out
              transform
              hover:scale-105
            "
            :class="{ 'bg-gray-300': index % 2 === 0 }"
          >
            <td class="text-left capitalize py-3 pl-3">{{ user.name }}</td>
            <td class="hidden sm:table-cell text-left capitalize py-3">
              {{ user.email }}
            </td>
            <td class="hidden sm:table-cell text-left py-3">
              {{ user.created_at }}
            </td>
            <td class="md:py-3" v-if="$page.props.auth.can.manageUsers">
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
  components: {
    AdminLayout,
    BlueButton,
    GreenButton,
  },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    search: _.throttle(function () {
      this.$inertia.get(
        "/admin/users?term=" + this.term,
        {},
        {
          preserveState: true,
          replace: true,
        }
      );
    }, 1000),

    // {
    //   this.$inertia.replace("/admin/users?term=" + this.term);
    // },
  },
};
</script>