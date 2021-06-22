<template>
  <!-- <div class="flex justify-center font-serif mt-24">
    <jet-validation-errors class="mb-4" />
  </div> -->

  <div
    class="
      flex
      justify-center
      items-center
      md:mx-auto
      w-full
      md:w-1/3
      p-4
      md:p-24
      mt-8
      mb-24
      font-serif
      text-gray-700
      md:rounded-xl
      bg-white
      shadow-md
    "
  >
    <form id="create-post" @submit.prevent="submit" class="w-full">
      <div class="flex justify-center text-4xl text-gold pb-10 tracking-widest">
        Create Post
      </div>

      <div>
        <label for="title" class="text-lg">Article Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter post title"
          class="
            mt-1
            block
            w-full
            border-2 border-yellow-300
            rounded-md
            shadow-sm
            focus:border-yellow-300
            focus:ring-transparent
          "
          v-model="form.title"
          required
        />
        <jet-input-error :message="form.errors.title" class="mt-2" />
      </div>

      <div class="mt-4">
        <label for="body" class="text-lg"> Article Content</label>

        <textarea
          id="body"
          placeholder="Enter article content"
          class="
            mt-1
            block
            w-full
            border-2 border-yellow-300
            rounded-md
            shadow-sm
            focus:border-yellow-300
            focus:ring-transparent
          "
          v-model="form.body"
          required
        />
        <jet-input-error :message="form.errors.body" class="mt-2" />
      </div>

      <div v-if="src" class="flex justify-center">
        <img
          :src="src"
          alt="image unavailable"
          class="
            h-52
            w-auto
            mt-8
            rounded-md
            border-2 border-yellow-300
            shadow-md
          "
        />
      </div>
      <jet-input-error
        :message="form.errors.post_image"
        class="flex justify-center mt-2"
      />

      <div class="flex justify-center mt-6">
        <label
          for="post_image"
          class="
            font-serif font-semibold
            text-xs
            uppercase
            tracking-widest
            text-gray-700
            border-2 border-yellow-300
            rounded-md
            shadow-sm
            h-10
            bg-gold-lite
            flex
            justify-center
            items-center
            cursor-pointer
            w-2/3
            hover:bg-gold-md
          "
        >
          add image
        </label>

        <input
          @change="setImage"
          id="post_image"
          type="file"
          class="mt-2 mb-2 hidden"
        />
      </div>

      <div class="flex justify-center mt-4">
        <jet-button
          class="
            font-serif
            text-gray-700
            border-2 border-yellow-300
            rounded-md
            shadow-sm
            h-10
            bg-gold-lite
            flex
            justify-center
            items-center
            cursor-pointer
            w-2/3
          "
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
import JetInputError from "@/Jetstream/InputError";
// import JetValidationErrors from "@/Jetstream/ValidationErrors";

export default {
  components: {
    JetButton,
    JetInputError,
    // JetValidationErrors,
  },
  data() {
    return {
      form: this.$inertia.form({
        title: this.title,
        body: this.body,
        post_image: this.post_image,
      }),
      src: null,
    };
  },

  methods: {
    submit() {
      this.form.post(this.route("newsfeed.store"), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "You have successfully been posted!",
          }),
            (this.form.body = null);
        },
      });
      //   let data = new FormData();
      //   data.append("title", this.form.title);
      //   data.append("body", this.form.body);
      //   data.append("post_image", this.form.post_image);
      //   // console.log(data);
      //   this.$inertia.post(route("newsfeed.store"), data);
    },

    setImage(e) {
      this.form.post_image = e.target.files[0];

      let reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        this.src = e.target.result;
      };
    },
  },
};
</script>
