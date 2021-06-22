<template>
  <div class="w-screen font-serif">
    <div class="grid sm:grid-cols-2 md:gap-20 items-center md:p-16 md:pb-14">
      <div
        class="
          grid grid-cols-1
          justify-items-center
          sm:justify-items-end
          text-gold
        "
      >
        <div
          class="
            min-w-min
            border-b-4 border-black
            pt-6
            pb-6
            text-6xl
            md:text-7xl
          "
        >
          Pad6y
        </div>
        <div class="flex justify-end text-4xl lg:text-5xl text-gray-500 pt-2">
          portfolio
        </div>
      </div>

      <div class="flex justify-center md:border-l-2">
        <div
          v-if="canLogin"
          class="
            flex flex-row
            md:flex-col
            w-full
            justify-center
            mx-auto
            md:max-w-min
            md:ml-8
            mt-3
            p-2
          "
        >
          <template v-if="$page.props.user">
            <inertia-link
              :href="route('newsfeed.index')"
              class="
                flex
                justify-center
                w-1/3
                md:w-full
                rounded-md
                tracking-widest
                uppercase
                text-sm
                font-semibold
                text-gray-700
                px-5
                py-2
                m-1
                bg-gold-text
                hover:bg-gold-md
                hover:ring-yellow-200 hover:ring-opacity-50
              "
            >
              Enter
            </inertia-link>

            <form method="POST" @submit.prevent="logout">
              <jet-danger-button type="submit" class="w-full m-1">
                Log Out
              </jet-danger-button>
            </form>
          </template>

          <template v-else>
            <div class="grid gap-5">
              <inertia-link
                :href="route('login')"
                class="
                  border-2
                  rounded-md
                  px-4
                  py-2
                  font-serif
                  text-lg
                  shadow-md
                  text-gray-700 text-center
                  bg-gradient-to-r
                  from-gold-text
                  to-yellow-400
                "
              >
                <span class="animate-pulse">Log in</span>
              </inertia-link>

              <inertia-link
                v-if="canRegister"
                :href="route('register')"
                class="
                  border-2
                  rounded-md
                  px-4
                  py-2
                  font-serif
                  text-lg
                  shadow-md
                  text-gray-700
                  bg-gradient-to-r
                  from-gold-text
                  to-yellow-400
                "
              >
                <span class="animate-pulse">Register</span>
              </inertia-link>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="flex flex-col justify-center lg:mx-28 min-h-full">
      <div class="bg-gradient-to-t p-4 from-gold-text to-white">
        <!-- intro to page and about myself -->
        <content-one></content-one>

        <!-- displaying tech svg's -->
        <tech-stack></tech-stack>

        <!-- project cards -->
        <div
          class="
            flex
            justify-center
            tracking-widest
            uppercase
            text-4xl text-gray-600
            mb-10
            md:pt-12
            md:pb-10
          "
        >
          Projects
        </div>
        <project-card
          :projects="projects"
          class="flex justify-center"
        ></project-card>
      </div>
    </div>

    <!-- contact form -->
    <div
      class="
        flex
        justify-center
        items-center
        md:mx-28
        bg-gradient-to-t
        from-gray-400
        to-gold-text
      "
    >
      <contact-section />
    </div>

    <!-- social media, github and email icons -->
    <div
      class="
        flex
        justify-center
        items-end
        space-x-4
        pt-10
        md:mx-28
        md:h-44
        bg-gradient-to-t
        from-white
        to-gray-400
      "
    >
      <div class="h-6 w-6">
        <a href="https://www.linkedin.com/in/patrick-wong-77b0aa212/">
          <icons :name="'linkedIn'"></icons>
        </a>
      </div>

      <div class="h-6 w-6">
        <a
          href="mailto:pad6ywong@gmail.com?subject=Contacting you from your portfolio page!"
        >
          <icons :name="'email'"></icons>
        </a>
      </div>

      <div class="h-6 w-6">
        <a href="https://github.com/pad6y">
          <icons :name="'github'"></icons>
        </a>
      </div>
    </div>
    <!-- <div class="flex justify-end mt-4 mr-4">
      <div class="font-serif text-gray-400 text-xs">
        Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
      </div>
    </div> -->

    <!-- copyright trademark welcome page specific -->

    <div class="flex justify-center text-xs text-gray-600 mt-12 mb-6">
      © {{ new Date().getFullYear() }} by Pad6y.com All rights reserved.
    </div>
  </div>
</template>



<script>
import contentOne from "@/Pages/Landing/contentOne";
import techStack from "@/Pages/Landing/techStack";
import projectCard from "@/Pages/Landing/dynamicProjectCard";
import contactSection from "@/Pages/Landing/contactSection";
import Icons from "@/Components/Icons";
import JetDangerButton from "@/Jetstream/DangerButton";

export default {
  components: {
    contentOne,
    contactSection,
    Icons,
    techStack,
    projectCard,
    JetDangerButton,
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    projects: Array,
  },
  methods: {
    logout() {
      this.$inertia.post(route("logout"));
    },
  },
};
</script>
