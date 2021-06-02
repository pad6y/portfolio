<template>
  <div
    class="grid grid-cols-2 border-b pt-4 pb-4 text-gray-700 text-xs md:text-sm"
  >
    <div class="text-black font-bold">
      Name :
      <span class="ml-2 font-normal"> {{ user.name }} </span><br />

      Email:
      <span class="md:ml-2 text-gray-600 font-normal">{{ user.email }}</span
      ><br />

      Role:
      <span class="ml-2 text-gray-600 font-normal">
        {{ user.roles[0].name }}</span
      ><br />
    </div>

    <div class="text-black font-bold">
      Posts :
      <div v-for="(post, index) in user.posts" :key="index">
        <div class="grid grid-cols-9">
          <div class="col-span-1 text-gray-600 font-normal ml-2 lg:ml-12">
            {{ index + 1 }}
          </div>

          <div class="col-span-8">
            <inertia-link
              :href="route('newsfeed.show', post.id)"
              class="text-indigo-700 hover:text-green-700 underline ml-4"
            >
              {{ post.title }}
            </inertia-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  // data() {
  //   return {
  //     role: "",
  //   };
  // },
  // computed: {
  //   userRole() {
  //     if (this.user.is_admin) {
  //       return (this.role = "admin");
  //     }
  //     return (this.role = "user");
  //   },
  // },
};
</script>