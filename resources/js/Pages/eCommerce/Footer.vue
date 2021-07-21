<template>
  <div class="bg-gray-700">
    <div
      class="
        grid grid-cols-3
        gap-2
        w-full
        md:w-2/3
        mx-auto
        text-gray-100
        uppercase
        pb-6
        text-xs
        md:text-base
      "
    >
      <div class="col-span-1">
        <div class="flex flex-col w-full md:w-3/5 mx-auto">
          <div class="flex justify-center p-4 font-semibold">Help & Info</div>
          <div
            v-for="(link, index) in allLinks"
            :key="index"
            class="flex justify-start text-xs"
          >
            <div v-if="link.type === 'HelpInfo'">
              <a :href="link.url">{{ link.name }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="flex flex-col w-full md:w-3/5 mx-auto">
          <div class="flex justify-center p-4 font-semibold">About Us</div>
          <div
            v-for="(link, index) in allLinks"
            :key="index"
            class="flex justify-start text-xs"
          >
            <div v-if="link.type === 'AboutUs'">
              <a :href="link.url">{{ link.name }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="flex flex-col w-full md:w-3/5 mx-auto">
          <div class="flex justify-center p-4 font-semibold">More</div>
          <div
            v-for="(link, index) in allLinks"
            :key="index"
            class="flex justify-start text-xs"
          >
            <div v-if="link.type === 'More'">
              <a :href="link.url">{{ link.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div
        class="
          font-serif
          bg-gray-100
          text-xs text-gray-600
          flex
          justify-center
          items-center
          p-6
        "
      >
        © {{ new Date().getFullYear() }} by Pad6y.com All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["links"],
  data() {
    return {
      allLinks: this.links,
    };
  },
};
</script>