<template>
  <div
    class="flex justify-center mt-28 mb-24 font-serif text-md rounded bg-gray-200 shadow-md"
  >
    <div class="mt-8 mb-5 bg-white h-1/2 w-2/3 rounded-md shadow-lg">
      <div
        class="m-4 pb-4 font-semibold md:text-lg text-gray-600 border-b-2 flex justify-center"
      >
        {{ user.name }}'s Profile Page
      </div>

      <div class="md:grid md:grid-cols-5 text-gray-600">
        <div class="md:col-span-1 pl-8 pb-2 text-gold">
          Name :<br />
          Email :<br />
          Database ID :<br />
          Joined at :<br />
          Current Role :<br />
          Post Count :<br />
        </div>
        <div class="md:col-span-2">
          {{ user.name }} <br />
          {{ user.email }} <br />
          {{ user.id }} <br />
          {{ user.created_at }} <br />
          Role <br />
          {{ user.posts.length }} <br />
        </div>
        <div class="md:col-span-2 flex justify-center">
          <img
            :src="user.profile_photo_url"
            alt="profile pic"
            class="h-52 w-auto items-center rounded-xl mb-4"
          />
        </div>
      </div>

      <div class="border-t-2 m-4 pb-4">
        <div class="" v-for="(post, index) in user.posts" :key="index">
          <!-- <newsfeed-item :post="post"></newsfeed-item> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsfeedItem from "@/Pages/Newsfeed/NewsfeedItem";

export default {
  components: {
    NewsfeedItem,
  },
  props: ["user"],
};
</script>