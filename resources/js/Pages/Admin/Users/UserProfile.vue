<template>
  <div
    class="flex justify-center mt-28 mb-24 font-serif text-md rounded bg-gray-200 shadow-md"
  >
    <div class="mt-8 mb-5 bg-white h-1/2 w-4/5 rounded-md shadow-lg">
      <div class="m-4 font-semibold md:text-lg text-gray-700 border-b-2">
        {{ user.name }}'s Page
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>