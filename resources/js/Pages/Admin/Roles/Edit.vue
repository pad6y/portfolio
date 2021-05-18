<template>
  <admin-layout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-xl text-gray-700 leading-tight">
          Roles Edit
        </h2>
      </div>
    </template>

    <div class="flex flex-col mx-auto w-1/2 px-6 py-2 text-xs sm:text-sm">
      <div>
        <h2 class="text-center text-xl font-semibold capitalize underline">
          {{ role.name }}
        </h2>
        <form @submit.prevent="submit">
          <div class="mt-4">
            <jet-label
              for="name"
              value="Role Name"
              class="flex justify-center text-xl"
            ></jet-label>
            <jet-input
              id="name"
              type="text"
              class="mt-1 block w-full"
              v-model="form.name"
              autofocus
            ></jet-input>
            <jet-input-error
              :message="form.errors.name"
              class="mt-2"
            ></jet-input-error>
          </div>
          <div class="flex items-center justify-center mt-4">
            <green-button
              type="submit"
              class="text-sm"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
              >Update</green-button
            >
            <jet-danger-button
              :href="route('AdminControlPanel.roles.index')"
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
  props: ["role"],
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
        name: this.role.name,
      }),
    };
  },
  methods: {
    submit() {
      this.form.patch(
        this.route("AdminControlPanel.roles.update", this.role.id),
        this.form
      );
    },
  },
};
</script>


