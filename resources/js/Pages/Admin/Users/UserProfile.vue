<template>
  <admin-layout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-xl text-gray-700 leading-tight">
          Users Role Update
        </h2>
      </div>
    </template>

    <div
      class="flex flex-col mx-auto h-5/6 w-full md:w-1/2 lg:px-6 py-2 text-xs sm:text-sm"
    >
      <div>
        <h2
          class="text-center text-lg md:text-xl font-semibold capitalize underline text-gray-700"
        >
          Current Role: {{ user.name }}
        </h2>
        <form @submit.prevent="submit">
          <div class="flex flex-col mt-2">
            <jet-label
              for="name"
              value="Name"
              class="text-lg md:text-xl"
            ></jet-label>
            <jet-input
              id="name"
              type="text"
              class="mt-1 md:block w-full disabled:opacity-50"
              v-model="form.name"
              autofocus
              disabled
            ></jet-input>
            <jet-input-error
              :message="form.errors.name"
              class="mt-2"
            ></jet-input-error>
          </div>

          <div class="flex flex-col mt-2">
            <jet-label
              for="email"
              value="E-mail"
              class="text-lg md:text-xl"
            ></jet-label>
            <jet-input
              id="email"
              type="email"
              class="mt-1 block w-full disabled:opacity-50"
              v-model="form.email"
              autofocus
              disabled
            ></jet-input>
            <jet-input-error
              :message="form.errors.email"
              class="mt-2"
            ></jet-input-error>
          </div>

          <div class="flex flex-col mt-2">
            <jet-label
              for="created_at"
              value="Joined"
              class="text-lg md:text-xl"
            ></jet-label>
            <jet-input
              id="created_at"
              type="text"
              class="mt-1 block w-full disabled:opacity-50"
              v-model="form.created_at"
              autofocus
              disabled
            ></jet-input>
            <jet-input-error
              :message="form.errors.created_at"
              class="mt-2"
            ></jet-input-error>
          </div>

          <div class="flex flex-col mt-2">
            <div class="inline-block relative">
              <jet-label
                for="role"
                value="Role"
                class="text-lg md:text-xl"
              ></jet-label>
              <!-- <select
                class="block capitalize border-yellow-300 focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 w-full"
                v-model="form.roles[0][0].name"
                tabindex="1"
              >
                <option
                  v-for="(option, index) in allRoles"
                  :key="index"
                  :value="option.name"
                  :selected="option.name === form.roles[0][0].name"
                >
                  {{ option.name }}
                </option>
              </select> -->
              <multiselect
                v-model="form.roles[0][0]"
                :options="allRoles"
                label="name"
                track-by="id"
                :tabindex="1"
                placeholder="Select a new role"
                class=""
              ></multiselect>
            </div>
          </div>

          <div class="flex items-center justify-center mt-24">
            <green-button
              type="submit"
              class="text-sm ml-4"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
              >Update</green-button
            >
            <jet-danger-button :href="route('users.index')" class="text-sm ml-4"
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
import GreenButton from "@/Components/GreenButton";
import JetDangerButton from "@/Jetstream/DangerButton";
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";
import Multiselect from "@suadelabs/vue3-multiselect";

export default {
  props: ["user", "allRoles"],
  components: {
    AdminLayout,
    GreenButton,
    JetDangerButton,
    JetInput,
    JetInputError,
    JetLabel,
    Multiselect,
  },
  data() {
    return {
      selected: null,
      form: this.$inertia.form({
        name: this.user.name,
        email: this.user.email,
        created_at: this.user.created_at,
        roles: [],
      }),
    };
  },
  created() {
    if (this.user.roles) {
      return this.form.roles.push(this.user.roles);
    }
  },
  methods: {
    submit() {
      console.log(this.form.roles[0][0].name);
      this.form.patch(this.route("users.update", this.user.id), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: `You have successfully edited ${this.user.name} role`,
          }),
            this.form;
        },
      });
    },
  },
};
</script>

<style>
.multiselect__tag {
  background: #d4af37 !important;
}
.multiselect__option--highlight {
  background: #d4af37;
}

.multiselect__option--highlight::after {
  background: #d4af37;
}

.multiselect__input:focus {
  outline: none;
}
</style>