<template>
  <button
    :type="type"
    class="inline-flex items-center px-4 py-2 bg-gold-lite rounded-md font-semibold text-xs text-black uppercase tracking-widest hover:bg-gold-md active:bg-gold-dark focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "submit",
    },
  },
};
</script>
