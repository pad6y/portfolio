<template>
  <div
    class="flex justify-center items-center min-h-full w-full md:w-2/3 m-4 md:mt-8 md:mb-24 font-serif text-gray-700 bg-transparent"
  >
    <form id="form" @submit.prevent="submit" class="w-11/12 md:w-4/6">
      <div class="flex justify-center text-4xl text-gray-500 mb-4">
        Contact Me
      </div>

      <div>
        <label for="name" class="block font-medium">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          class="mt-1 block w-full border-2 border-yellow-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring-transparent"
          v-model="form.name"
        />
        <jet-input-error :message="form.errors.name" class="mt-2" />
      </div>

      <div>
        <label for="email" class="block font-medium mt-4">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email Address"
          class="mt-1 block w-full border-2 border-yellow-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring-transparent"
          v-model="form.email"
        />
        <jet-input-error :message="form.errors.email" class="mt-2" />
      </div>

      <div class="mt-4">
        <label for="body" class="block font-medium">Message</label>

        <textarea
          id="body"
          placeholder="Enter Message"
          class="mt-1 block w-full border-2 border-yellow-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring-transparent"
          v-model="form.body"
        />
        <jet-input-error :message="form.errors.body" class="mt-2" />
      </div>

      <div class="flex justify-end mt-4">
        <gold-button
          type="submit"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          send
        </gold-button>
      </div>
    </form>
  </div>
</template>

<script>
import JetInputError from "@/Jetstream/InputError";
import GoldButton from "@/Components/GoldButton";
// import JetValidationErrors from "@/Jetstream/ValidationErrors";

export default {
  inheritAttrs: false,
  components: {
    JetInputError,
    GoldButton,
    // JetValidationErrors,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.name,
        email: this.email,
        body: this.body,
      }),
    };
  },

  methods: {
    submit() {
      this.form.put(this.route("sendEmail"), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "You have successfully submitted the contact form!",
          }),
            (this.form.name = null);
          this.form.email = null;
          this.form.body = null;
        },
      });
    },
  },
};
</script>