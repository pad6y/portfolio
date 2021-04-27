<template>
  <div class="flex justify-center font-serif mt-24">
    <jet-validation-errors class="mb-4" />
  </div>

  <div class="flex justify-center items-center min-h-full mt-8 mb-24">
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form id="create-post" @submit.prevent="submit()" class="w-5/6 sm:w-1/3">
      <div>
        <label
          for="title"
          class="block font-serif font-medium text-sm text-gray-700"
          >Article Title</label
        >
        <input
          id="title"
          type="text"
          placeholder="Enter post title"
          class="mt-1 block w-full border-2 border-yellow-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring-transparent"
          v-model="form.title"
          required
        />
      </div>

      <div class="mt-4">
        <label
          for="body"
          class="block font-serif font-medium text-sm text-gray-700"
        >
          Article Content</label
        >

        <textarea
          id="body"
          placeholder="Enter article content"
          class="mt-1 block w-full border-2 border-yellow-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring-transparent"
          v-model="form.body"
          required
        />
      </div>

      <div class="flex justify-center mt-6">
        <label
          for="post_image"
          class="font-serif font-semibold text-xs uppercase tracking-widest text-gray-700 border-2 border-yellow-300 rounded-md shadow-sm h-10 bg-gold-lite flex justify-center items-center cursor-pointer w-2/3 hover:bg-gold-md"
          >add image</label
        >
        <input
          @change="setImage"
          id="post_image"
          type="file"
          class="mt-2 mb-2 hidden"
        />
      </div>

      <div class="flex justify-center mt-4">
        <jet-button
          class="font-serif text-gray-700 border-2 border-yellow-300 rounded-md shadow-sm h-10 bg-gold-lite flex justify-center items-center cursor-pointer w-2/3"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Post
        </jet-button>
      </div>
    </form>
  </div>
</template>

<script>
import JetButton from "@/Jetstream/Button";
import JetValidationErrors from "@/Jetstream/ValidationErrors";

export default {
  props: {
    status: String,
  },
  components: {
    JetButton,
    JetValidationErrors,
  },
  data() {
    return {
      form: {
        title: "",
        body: "",
        post_image: "",
      },
    };
  },

  methods: {
    submit() {
      let data = new FormData();

      data.append("title", this.form.title);
      data.append("body", this.form.body);
      data.append("post_image", this.form.post_image);
      // console.log(data);
      this.$inertia.post(route("newsfeed.store"), data);
    },
    setImage(e) {
      this.form.post_image = e.target.files[0];
    },
    // },
    // submit() {
    //   this.form
    //     .transform((data) => ({
    //       ...data,
    //       remember: this.form.remember ? "on" : "",
    //     }))
    //     .post(this.route("newsfeed.store"), {
    //       onFinish: () => this.form.reset("password"),
    //     });
    // },
  },
};
</script>
