<template>
  <!-- Page Heading -->
  <header class="bg-gray-200 shadow" v-if="$slots.header">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot name="header"></slot>
    </div>
  </header>

  <div class="max-w-7xl mx-auto">
    <div
      class="flex flex-col lg:flex-row md:flex-wrap md:py-6 sm:justify-around"
    >
      <admin-sidebar></admin-sidebar>
      <div
        class="bg-white w-full overflow-visible shadow-xl mt-4 lg:mt-0 md:py-6 lg:w-2/3 sm:rounded-lg"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar";

export default {
  components: {
    AdminSidebar,
  },
  inheritAttrs: false,
};
</script>