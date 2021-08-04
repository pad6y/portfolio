<template>
  <button
    :type="type"
    class="focus:outline-none transform hover:scale-110 focus:scale-100"
    :class="this.class"
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
    class: "",
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