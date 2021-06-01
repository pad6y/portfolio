<template>
  <div
    class="flex justify-center text-4xl text-gray-500 mt-10 mb-4 md:px-60 md:pt-24"
  >
    Tech Stack
  </div>

  <div
    class="grid grid-cols-5 gap-x-3 gap-y-6 justify-center mx-auto w-2/3 py-12 md:py-24"
  >
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'nodejs'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'laravel'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'javascript'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'mongodb'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'expressjs'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'vuejs'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'sass'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'tailwindcss'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'mySql'"></icons>
    </div>
    <div class="flex justify-center items-center col-span-1">
      <icons :name="'github'"></icons>
    </div>
  </div>
</template>

<script>
import Icons from "@/Components/Icons";

export default {
  components: {
    Icons,
  },
};
</script>
