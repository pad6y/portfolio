<template>
  <admin-layout>
    <template #header>
      <h2
        class="flex justify-center font-semibold text-xl text-gray-700 leading-tight"
      >
        Control Panel
      </h2>
    </template>

    <div class="px-6 py-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sit a enim
      perspiciatis eos repellendus saepe itaque, facere ut veritatis similique
      praesentium, voluptatem sed vero doloribus rem eum nulla quo!
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
export default {
  inheritAttrs: false,
  components: { AdminLayout },
};
</script>