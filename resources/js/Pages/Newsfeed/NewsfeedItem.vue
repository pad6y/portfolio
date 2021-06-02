<template>
  <div class="grid grid-cols-10 font-serif text-gray-600 pt-8 pb-4">
    <div class="col-span-10 sm:col-span-4">
      <div class="text-gold md:ml-10 hover:underline">
        <inertia-link :href="route('newsfeed.show', post.id)">
          {{ post.title }}
        </inertia-link>
      </div>
      <div class="text-xs sm:text-sm md:ml-12 pt-2 text-gray-600">
        {{ post.body }}
      </div>
    </div>

    <div
      class="flex items-center col-span-10 sm:col-span-4 sm:mx-4 sm:ml-10 pt-4 sm:pt-0"
    >
      <div v-if="post.post_image">
        <img
          :src="post.post_image"
          :alt="'image unavailable'"
          class="h-auto sm:grid w-auto object-fill rounded-md shadow-md"
        />
      </div>
    </div>

    <div class="col-span-10 sm:col-span-2 border-l-2">
      <div
        class="grid justify-items-end sm:justify-items-start text-xs sm:text-base text-gold sm:ml-5"
      >
        <div class="mb-4">
          <span class="text-gray-600">Author: </span> {{ post.user.name }}
        </div>

        <div class="relative">
          <button
            type="button"
            class="flex flex-row focus:outline-none text-gray-600"
            @click="openMenu = !openMenu"
            v-if="$page.props.auth.can.manageAdmins"
          >
            Options<icons :name="'options'"></icons>
          </button>

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
import Icons from "@/Components/Icons";

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
  },
};
</script>