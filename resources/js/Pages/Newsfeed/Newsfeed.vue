<template>
  <div class="mx-auto max-w-6xl sm:pr-2 sm:py-6 md:px-6 md:pb-52">
    <div class="flex flex-col p-2 sm:p-8 sm:py-4">
      <infinite-scroll @loadMore="loadMorePosts">
        <div v-for="(post, index) in allPosts.data" :key="index">
          <newsfeed-item :post="post" :pagination="pagination" />
        </div>
      </infinite-scroll>
    </div>
  </div>
</template>



<script>
import NewsfeedItem from "./NewsfeedItem";
import InfiniteScroll from "@/Components/InfiniteScroll";

export default {
  inheritAttrs: false,
  components: {
    InfiniteScroll,
    NewsfeedItem,
  },
  props: ["posts"],
  data() {
    return {
      allPosts: this.posts,
    };
  },
  computed: {
    pagination() {
      return (this.allPosts = this.posts);
    },
  },
  methods: {
    loadMorePosts() {
      if (!this.allPosts.next_page_url) {
        return;
      }
      return axios.get(this.allPosts.next_page_url).then((resp) => {
        this.allPosts = {
          ...resp.data,
          data: [...this.allPosts.data, ...resp.data.data],
        };
      });
    },
  },
};
</script>
