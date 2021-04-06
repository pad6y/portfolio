<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold font-serif text-xl text-gray-800 leading-tight">
        Newsfeed
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <newsfeed />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Newsfeed from "@/Pages/Newsfeed/Newsfeed";
import ApplicationMark from "@/Jetstream/ApplicationMark";

export default {
  components: {
    AppLayout,
    Newsfeed,
    ApplicationMark,
  },
};
</script>