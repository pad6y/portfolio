<template>
  <div class="bg-gray-200 shadow-xl">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div
        class="flex justify-center text-lg sm:text-2xl text-gold md:ml-4 tracking-widest"
      >
        Newsfeed
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="bg-white overflow-hidden shadow-xl">
      <div
        class="flex flex-col justify-center m-2 sm:justify-between sm:ml-14 sm:my-4"
      >
        Find the lastest updates and announcements about this site and other
        demo sites!

        <gold-button
          :href="route('newsfeed.create')"
          class="sm:w-1/4 text-xs md:text-sm md:mt-4"
          v-if="$page.props.auth.can.manageAdmins"
        >
          <icons :name="'arrow-down'"></icons>Add News Article
        </gold-button>
      </div>
      <newsfeed :posts="posts" />
    </div>
  </div>
</template>

<script>
import Newsfeed from "@/Pages/Newsfeed/Newsfeed";
import GoldButton from "@/Components/GoldButton";
import Icons from "@/Components/Icons";

export default {
  inheritAttrs: false,
  components: {
    Newsfeed,
    GoldButton,
    Icons,
  },
  props: ["posts"],
};
</script>


