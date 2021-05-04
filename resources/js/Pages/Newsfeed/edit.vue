<template>
  <div class="flex justify-center font-serif mt-24">
    <jet-validation-errors class="mb-4" />
  </div>

  <div
    class="flex justify-center items-center min-h-full mt-8 mb-24 font-serif text-gray-700"
  >
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submitUpdate" class="w-5/6 sm:w-1/3">
      <div class="flex justify-center text-4xl text-gold mb-4">Edit Post</div>

      <div>
        <label for="title" class="block font-medium">Article Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter post title"
          class="mt-1 block w-full border-2 border-yellow-300 rounded-md shadow-md focus:border-yellow-300 focus:ring-transparent"
          v-model="postUpdateForm.title"
          required
        />
      </div>

      <div class="mt-4">
        <label for="body" class="block font-medium"> Article Content</label>

        <textarea
          id="body"
          placeholder="Enter article content"
          class="mt-1 block w-full border-2 border-yellow-300 rounded-md shadow-md focus:border-yellow-300 focus:ring-transparent"
          v-model="postUpdateForm.body"
          required
        />
      </div>

      <div v-if="src" class="flex justify-center">
        <img
          :src="src"
          alt="image unavailable"
          class="h-52 w-auto mt-8 rounded-md border-2 border-yellow-300 shadow-md"
        />
      </div>

      <div class="flex justify-center mt-6">
        <label
          for="post_image"
          class="font-serif font-semibold text-xs uppercase tracking-widest text-gray-700 border-2 border-yellow-300 rounded-md shadow-sm h-10 bg-gold-lite flex justify-center items-center cursor-pointer w-2/3 hover:bg-gold-md"
          >edit image</label
        >
        <input
          @change="setImage"
          name="post_image"
          id="post_image"
          type="file"
          class="mt-2 mb-2 hidden"
        />
      </div>

      <div class="flex justify-center mt-4">
        <jet-button
          class="font-serif text-gray-700 border-2 border-yellow-300 rounded-md shadow-sm h-10 bg-gold-lite flex justify-center items-center cursor-pointer w-2/3"
          :class="{ 'opacity-25': postUpdateForm.processing }"
          :disabled="postUpdateForm.processing"
        >
          Update Post
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
    post: Object,
    status: String,
  },
  components: {
    JetButton,
    JetValidationErrors,
  },
  data() {
    return {
      postUpdateForm: this.$inertia.form({
        title: this.post.title,
        body: this.post.body,
        post_image: "",
        _method: "PUT",
      }),
      src: this.post.post_image,
    };
  },

  methods: {
    submitUpdate() {
      this.postUpdateForm.post(
        this.route("newsfeed.update", this.post.id),
        // this.postUpdateForm,
        {
          preserveScroll: true,
          onSuccess: () => {
            Toast.fire({
              icon: "success",
              title: "Successfully updated!",
            });
            this.loading = false;
          },
        }
      );
    },
    setImage(e) {
      this.postUpdateForm.post_image = e.target.files[0];

      let reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        this.src = e.target.result;
      };
    },
  },
};
</script>