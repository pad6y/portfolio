<template>
  <div class="container mx-auto max-w-6xl md:py-6 md:px-6 pb-20 font-serif">
    <div class="grid grid-cols-1 items-center p-4 md:p-8 pb-12">
      <h2 class="font-serif text-gold border-b-2 pb-4">
        Current registered users and their posts:
      </h2>

      <infinite-scroll @loadMore="loadMoreUsers">
        <div v-for="(user, index) in allUsers.data" :key="index">
          <users-details :user="user"></users-details>
        </div>
      </infinite-scroll>
    </div>
  </div>
</template>

<script>
import UsersDetails from "./UsersDetails";
import InfiniteScroll from "@/Components/InfiniteScroll";

export default {
  inheritAttrs: false,
  components: {
    UsersDetails,
    InfiniteScroll,
  },
  props: ["users"],
  data() {
    return {
      allUsers: this.users,
    };
  },
  methods: {
    loadMoreUsers() {
      if (!this.allUsers.next_page_url) {
        return;
      }
      return axios.get(this.allUsers.next_page_url).then((resp) => {
        this.allUsers = {
          ...resp.data,
          data: [...this.allUsers.data, ...resp.data.data],
        };
      });
    },
  },
};
</script>