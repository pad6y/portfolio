<template>
  <div class="grid grid-cols-10 font-serif pt-8 pb-4">
    <div class="col-span-8">
      <div class="text-gold">
        <inertia-link :href="route('newsfeed.show', post.id)">
          {{ post.title }}
        </inertia-link>
      </div>
      <div class="text-xs sm:text-sm ml-2 pt-2 text-gray-600">
        {{ post.body }}
        <div v-if="post.post_image" class="grid justify-items-end">
          <img
            :src="post.post_image"
            :alt="$page.props.user.name"
            class="hidden sm:grid h-28 sm:w-28 object-fill rounded-md"
          />
        </div>
        <div v-else></div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="grid justify-items-end text-gold">
        <span class="text-gray-600">By: </span> {{ post.user.name }}

        <div class="relative">
          <danger-button
            :type="button"
            class="focus:outline-none"
            @click="openMenu = !openMenu"
          >
            Options
          </danger-button>
          <div
            v-if="openMenu"
            class="bg-gray-300 text-sm absolute w-48 right-0 text-gray-700 shadow-lg rounded-md px-4 py-2 hover:bg-gray-700 hover:text-gray-300 transition duration-150 ease-in-out"
          >
            <form @submit.prevent="deletePost">
              <button
                type="submit"
                class="flex justify-between items-center w-full focus:outline-none"
              >
                Delete Post
              </button>
            </form>
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
export default {
  components: {
    DangerButton,
  },
  props: ["post"],
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
        // onSuccess:()=> {
        // Toast.fire({
        //   icon: 'success',
        //   title: 'Post has been deleted successfully'
        // })
        // }
      });
    },
  },
};
</script>