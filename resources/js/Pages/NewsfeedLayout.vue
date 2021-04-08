<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <newsfeed :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import Newsfeed from "@/Pages/Newsfeed/Newsfeed";

export default {
  components: { Newsfeed },
  data: function () {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios
        .get("/newsfeed/posts")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>