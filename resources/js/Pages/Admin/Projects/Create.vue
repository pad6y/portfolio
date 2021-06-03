<template>
  <admin-layout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-xl text-gray-700 leading-tight">
          Projects
        </h2>
      </div>
    </template>

    <div class="flex flex-col mx-auto w-1/2 px-6 py-2 text-xs sm:text-sm">
      <div>
        <h2 class="text-center text-xl font-semibold capitalize underline">
          Create new project card
        </h2>
        <form @submit.prevent="submit">
          <div class="mt-4">
            <jet-label
              for="project_name"
              value="Project Name"
              class="text-lg"
            ></jet-label>
            <jet-input
              id="project_name"
              type="text"
              class="mt-1 block w-full"
              v-model="form.project_name"
              autofocus
            ></jet-input>
            <jet-input-error
              :message="form.errors.project_name"
              class="mt-2"
            ></jet-input-error>
          </div>

          <div class="mt-4">
            <jet-label
              for="project_type"
              value="Project Type"
              class="text-lg"
            ></jet-label>
            <jet-input
              id="project_type"
              type="text"
              class="mt-1 block w-full"
              v-model="form.project_type"
              autofocus
            ></jet-input>
            <jet-input-error
              :message="form.errors.project_type"
              class="mt-2"
            ></jet-input-error>
          </div>

          <div class="mt-4">
            <jet-label for="description" class="text-lg">Description</jet-label>

            <textarea
              id="description"
              class="w-full border-yellow-300 focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm"
              v-model="form.description"
              required
            />
            <jet-input-error :message="form.errors.description" class="mt-2" />
          </div>

          <div class="mt-4">
            <jet-label
              for="url_link"
              value="Git Repo Link"
              class="flex justify-start text-lg"
            ></jet-label>
            <jet-input
              id="url_link"
              type="text"
              class="mt-1 block w-full"
              v-model="form.url_link"
              autofocus
            ></jet-input>
            <jet-input-error
              :message="form.errors.url_link"
              class="mt-2"
            ></jet-input-error>
          </div>

          <div class="flex items-center justify-center mt-4">
            <green-button
              type="submit"
              class="text-sm"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
              >Submit</green-button
            >
            <jet-danger-button
              :href="route('projects.index')"
              class="text-sm ml-4"
              >Cancel</jet-danger-button
            >
          </div>
        </form>
      </div>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import BlueButton from "@/Components/BlueButton";
import GreenButton from "@/Components/GreenButton";
import JetDangerButton from "@/Jetstream/DangerButton";
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";

export default {
  components: {
    AdminLayout,
    BlueButton,
    GreenButton,
    JetDangerButton,
    JetInput,
    JetInputError,
    JetLabel,
  },
  data() {
    return {
      form: this.$inertia.form({
        project_name: this.project_name,
        project_type: this.project_type,
        description: this.description,
        url_link: this.url_link,
      }),
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("projects.store"), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "You have successfully created project card!",
          });
        },
      });
    },
  },
};
</script>