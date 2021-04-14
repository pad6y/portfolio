<template>
  <div class="grid grid-cols-2 font-serif border-b pt-4 pb-4">
    <div>
      <div class="text-gold">{{ post.title }}</div>
      <div class="ml-4 pt-2 text-gray-600">{{ post.body }}</div>
    </div>

    <div class="grid justify-items-end text-gold">
      {{ post.user.name }}
      <div class="text-xs text-gray-400">
        Published:
        {{ moment(post.created_at, "YYYYMMDD").fromNow() }}
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");

export default {
  props: ["post"],
  data() {
    return {
      moment: moment,
    };
  },
};
</script>