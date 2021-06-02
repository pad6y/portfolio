<template>
  <div class="bg-gray-200 shadow-xl">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between">
        <div class="text-lg md:text-2xl text-gold md:ml-4">Newsfeed</div>

        <gold-button
          :href="route('newsfeed.create')"
          class="text-xs md:text-sm md:mr-4"
          v-if="$page.props.auth.can.manageAdmins"
        >
          <icons :name="'arrow-down'"></icons>Add News Article
        </gold-button>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="bg-white overflow-hidden shadow-xl">
      <div class="ml-14 my-4">
        Find the lastest updates and announcements about this site and other
        demo sites!
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


