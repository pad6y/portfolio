<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center px-4 py-2 bg-gold-text border border-gray-400 rounded-md text-gray-700 uppercase tracking-widest shadow-md hover:bg-gold-dark focus:outline-none focus:border-gold-lite focus:shadow-outline-black active:bg-yellow-600 transition ease-in-out duration-150"
    @click="visit"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    href: {},
  },
  methods: {
    visit(event) {
      if (!this.href) {
        return;
      }
      event.preventDefault();
      this.$inertia.visit(this.href);
    },
  },
};
</script>