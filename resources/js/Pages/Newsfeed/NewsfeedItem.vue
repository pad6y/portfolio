<template>
  <div class="grid grid-cols-10 font-serif pt-8 pb-4">
    <div class="col-span-4">
      <div class="text-gold">
        <inertia-link :href="route('newsfeed.show', post.id)">
          {{ post.title }}
        </inertia-link>
      </div>
      <div class="text-xs sm:text-sm md:ml-2 pt-2 text-gray-600">
        {{ post.body }}
      </div>
    </div>

    <div class="col-span-4 mt-4 mr-4">
      <div v-if="post.post_image" class="grid justify-items-end">
        <img
          :src="post.post_image"
          :alt="'image unavailable'"
          class="hidden sm:grid h-28 w-auto object-fill rounded-md"
        />
      </div>
    </div>

    <div class="col-span-2">
      <div class="grid justify-items-end text-gold">
        <div class="mb-4">
          <span class="text-gray-600">By: </span> {{ post.user.name }}
        </div>

        <div class="relative">
          <div class="flex justify-items-center text-gray-600">
            <button type="button" class="focus:outline-none" @click="toggle">
              Options
            </button>
            <icons :name="'options'" />
          </div>

          <div
            v-if="openMenu"
            class="bg-gray-300 text-sm absolute w-48 right-0 text-gray-700 shadow-lg rounded-md px-4 py-2 transition duration-150 ease-in-out"
          >
            <!-- <form @submit.prevent="deletePost"> -->
            <button
              type="submit"
              class="flex justify-between items-center w-full p-2 rounded-md focus:outline-none hover:bg-red-800 hover:text-gray-300"
              @click="deletePost"
            >
              Delete Post
            </button>
            <!-- </form> -->

            <button
              class="flex justify-between items-center w-full p-2 rounded-md focus:outline-none hover:bg-yellow-500"
            >
              <inertia-link :href="route('newsfeed.edit', post.id)">
                Edit Post
              </inertia-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-end border-b font-serif text-xs text-gray-400 pb-4">
    <!-- <div class="">{{ moment().startOf(post.created_at).fromNow() }}</div> -->
    Published: {{ post.created_at }}
  </div>
</template>

<script>
// var moment = require("moment");
import DangerButton from "@/Jetstream/DangerButton";
import Icons from "@/components/Icons";

export default {
  components: {
    DangerButton,
    Icons,
  },
  props: ["post", "pagination"],
  // data() {
  //   return {
  //     moment: moment,
  //   };
  // },

  data() {
    return {
      openMenu: false,
      deleteForm: this.$inertia.form({
        userPost: this.post,
      }),
    };
  },

  methods: {
    deletePost() {
      this.openMenu = false;
      this.deleteForm.delete(this.route("newsfeed.destroy", this.post), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "Post has been deleted successfully",
          });
        },
        onFinish: () => {
          this.deleteForm.reset();
          // window.location.reload();
        },
      });
    },
    toggle() {
      this.openMenu = !this.openMenu;
    },
    closeMenu() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>