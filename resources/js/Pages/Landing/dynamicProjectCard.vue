<template>
  <div
    class="flex flex-col w-5/6 md:w-2/3 mx-auto md:grid md:grid-cols-3 mb-12"
  >
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="grid col-span-1 justify-items-center"
    >
      <div
        class="
          flex flex-col
          w-5/6
          bg-gradient-to-t
          from-white
          to-gray-500
          rounded-md
          shadow-md
          my-4
          overflow-hidden
          transition
          duration-500
          ease-in-out
          transform
          hover:scale-110
          hover:bg-white
        "
      >
        <div
          class="
            flex
            justify-center
            mx-auto
            w-full
            min-h-80
            uppercase
            text-lg
            font-semibold
            py-4
          "
        >
          {{ project.project_name }}
        </div>

        <div class="mx-auto w-5/6 text-xs">
          <div class="pb-2">
            <span class="font-semibold">Project type: </span>
            {{ project.project_type }}
          </div>

          <div class="pb-4 h-auto">
            <span class="font-semibold">Description: </span
            >{{ getReduceBody(project.description) }}
          </div>

          <a
            v-if="project.git_link"
            :href="project.git_link"
            class="flex justify-center uppercase font-bold hover:text-blue-700"
            >Git repo</a
          >

          <!-- Need to add table column for deployed link and the do v-if display -->
          <div class="flex justify-center p-2">
            <blue-button v-if="project.url_link" :href="project.url_link"
              >More Info</blue-button
            >
            <div
              v-else
              class="
                flex
                justify-center
                items-end
                w-full
                font-semibold
                text-red-800
                mb-6
                px-2
                py-2
              "
            >
              Currently not deployed!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blueButton from "@/Components/BlueButton";

export default {
  props: ["projects"],
  components: {
    blueButton,
  },
  methods: {
    getReduceBody(data) {
      let strData = data;

      if (strData != null) {
        return strData.substring(0, 70) + "...";
      }
    },
  },
};
</script>