// Allows admins to CRUD about section

<template>
  <div class="py-6 px-4 text-gray-800 uppercase font-bold bg-gray-100">
    Add About:
    <div class="font-normal text-xs">
      This is where you add links about the company
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="flex flex-col">
        <label for="name" class="mt-2 text-xs">Display text:</label>
        <input
          id="nameAbout"
          type="text"
          placeholder="Enter text that will be displayed in footer"
          class="
            text-xs
            mt-2
            md:mt-4
            block
            w-full
            border-2 border-yellow-300
            rounded-md
            shadow-sm
            focus:border-yellow-300
            focus:ring-transparent
          "
          v-model="form.name"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="url" class="mt-2 text-xs">Enter URL:</label>
        <input
          @keyup.enter="submit"
          id="urlAbout"
          type="text"
          placeholder="Enter URL link to article"
          class="
            text-xs
            mt-2
            md:mt-4
            block
            w-full
            border-2 border-yellow-300
            rounded-md
            shadow-sm
            focus:border-yellow-300
            focus:ring-transparent
          "
          v-model="form.url"
          required
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        type: "AboutUs",
        url: "",
      }),
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("eCommerce.footerLink.store"), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "New link added to About Us section!",
          });
          this.form.reset();
          // this.form.name = null;
          // this.form.url = null;
        },
      });
    },
  },
};
</script>