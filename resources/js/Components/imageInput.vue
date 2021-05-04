<template>
  <div>
    <input
      @change="setImage"
      id="post_image"
      type="file"
      class="mt-2 mb-2 hidden"
      ref="file"
    />
    <button
      for="post_image"
      class="font-serif font-semibold text-xs uppercase tracking-widest text-gray-700 border-2 border-yellow-300 rounded-md shadow-sm h-10 bg-gold-lite flex justify-center items-center cursor-pointer w-2/3 hover:bg-gold-md"
    >
      add image
    </button>
  </div>
</template>


<script>
export default {
  // props: {
  //   value: file,
  // },
  // methods: {
  //   browse() {
  //     this.$refs.file.click();
  //   },
  //   setImage(e) {
  //     this.$emit("input", e.targetfiles[0]);
  //     // this.form.post_image = e.target.files[0];
  //   },
  // },
};
</script>