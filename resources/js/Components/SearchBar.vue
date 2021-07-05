<template>
  <div class="flex text-gray-500 ml-4 sm:ml-20 mt-1 w-2/3">
    <input
      @keydown.enter="onInput"
      @keyup.enter="reset"
      id="search"
      type="text"
      placeholder="Search Products"
      class="
        block
        w-full
        h-8
        pl-10
        border-2 border-yellow-300
        rounded-full
        shadow-md
        focus:border-yellow-300
        focus:ring-transparent
      "
    />
    <i class="absolute active:hidden p-1 ml-2"
      ><icons :name="'search'" :class="'h-5 w-5'"></icons
    ></i>
  </div>
</template>

<script>
import Icons from "@/Components/Icons";

export default {
  components: {
    Icons,
  },
  emits: ["termChange"],
  inheritAttrs: false,
  methods: {
    onInput: function (event) {
      this.$emit("termChange", event.target.value);
    },
    reset: function (event) {
      event.target.value = null;
    },
  },
};
</script>