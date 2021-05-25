<template>
  <div class="flex flex-col w-full sm:w-1/4 font-serif text-gray-600">
    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
      <button
        class="flex justify-between items-center px-6 py-2 w-full focus:outline-none hover:bg-gold-dark hover:text-gray-50"
        @click="openAdmins = !openAdmins"
      >
        <span>Admins</span>
        <icons :name="'chevron_down'" v-if="openAdmins"></icons>
        <icons :name="'chevron_left'" v-else></icons>
      </button>

      <div class="flex flex-col" v-if="openAdmins">
        <inertia-link
          :href="route('AdminControlPanel.admins.index')"
          class="text-right capitalize border-t w-full px-6 py-2"
          :class="
            route().current('AdminControlPanel.admins.*')
              ? 'text-gray-50 bg-gray-500'
              : 'hover:text-gray-50 hover:bg-gray-500'
          "
          >Admins</inertia-link
        >
        <inertia-link
          :href="route('AdminControlPanel.roles.index')"
          class="text-right capitalize border-t w-full px-6 py-2"
          :class="
            route().current('AdminControlPanel.roles.*')
              ? 'text-gray-50 bg-gray-500'
              : 'hover:text-gray-50 hover:bg-gray-500'
          "
          v-if="$page.props.auth.can.accessRoles"
          >Roles</inertia-link
        >
        <inertia-link
          :href="route('users.index')"
          class="text-right capitalize border-t w-full px-6 py-2"
          :class="
            route().current('users.*')
              ? 'text-gray-50 bg-gray-500'
              : 'hover:text-gray-50 hover:bg-gray-500'
          "
          v-if="$page.props.auth.can.accessUsers"
          >Users</inertia-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Icons from "@/components/Icons";
export default {
  components: {
    Icons,
  },
  data: () => ({
    openAdmins: false,
  }),
};
</script>
