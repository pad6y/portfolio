<template>
  <admin-layout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-xl text-gray-700 leading-tight">
          Projects
        </h2>
        <blue-button
          :href="route('projects.create')"
          class="text-xs"
          v-if="$page.props.auth.can.manageRoles"
          >Create</blue-button
        >
      </div>
    </template>

    <!-- <div class="text-center my-4" v-if="$page.props.success">
      <span class="text-xl bg-blue-700 text-gray-50 p-2 rounded-md shadow-md">
        {{ $page.props.success }}
      </span>
    </div> -->

    <div class="px-0 md:px-6 py-2 text-xs sm:text-sm">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="text-left pl-3">Project Name</th>
            <th class="text-left pl-3">Project Type</th>
            <th class="hidden sm:table-cell text-left pl-3">Description</th>
            <th class="text-left">GIT REPO URL</th>
            <th
              class="text-right pr-3"
              v-if="$page.props.auth.can.manageAdmins"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(project, index) in projects"
            :key="index"
            class="text-center shadow transition duration-500 ease-in-out transform hover:scale-105"
            :class="{ 'bg-gray-200': index % 2 === 0 }"
          >
            <td class="text-left capitalize py-3 pl-3">
              {{ project.project_name }}
            </td>
            <td class="text-left capitalize py-3 pl-3">
              {{ project.project_type }}
            </td>
            <td class="hidden sm:table-cell text-left capitalize py-3 pl-3">
              {{ getReduceBody(project.description) }}
            </td>
            <td class="text-left py-3">
              <a :href="project.url_link">{{
                getReduceBody(project.url_link)
              }}</a>
            </td>
            <td class="py-3" v-if="$page.props.auth.can.manageAdmins">
              <div class="flex justify-end pr-2">
                <green-button
                  :href="route('projects.show', project.id)"
                  class="sm:text-sm shadow-md"
                  >Edit
                </green-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout";
import BlueButton from "@/Components/BlueButton";
import GreenButton from "@/Components/GreenButton";

export default {
  props: ["projects"],
  data() {
    return {
      // flashMsg: this.$page.props.success,
    };
  },
  components: {
    AdminLayout,
    BlueButton,
    GreenButton,
  },
  methods: {
    getReduceBody(data) {
      let strData = data;

      if (strData != null) {
        return strData.substring(0, 20) + "...";
      }
    },
  },
};
</script>