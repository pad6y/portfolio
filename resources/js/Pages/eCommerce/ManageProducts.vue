<template>
  <e-com-layout :links="footerLinks">
    <template #title>
      <div class="md:pl-10 text-base md:text-3xl md:mr-24">Manage Products</div>
    </template>

    <div class="w-full lg:w-4/5 md:mx-auto">
      <div
        class="py-2 px-1 md:p-4 text-gray-800 uppercase font-bold bg-gray-200"
      >
        <div class="text-xs md:text-sm">
          <div class="grid grid-cols-12 p-2 text-white bg-gray-500">
            <div class="col-span-1 pl-2">Id</div>
            <div class="col-span-3">Product Name</div>
            <div class="col-span-2 pl-2">Product Code</div>
            <div class="col-span-4 pl-4">Actions</div>
          </div>

          <div v-for="(item, index) in products" :key="index">
            <div
              class="grid grid-cols-12 p-1 md:p-2 text-gray-600"
              :class="{ 'bg-white p-1': index % 2 === 0 }"
            >
              <div class="col-span-1 pl-2">{{ item.id }}</div>
              <div class="col-span-3">{{ item.product_name }}</div>
              <div class="col-span-2 pl-2">{{ item.product_code }}</div>
              <div class="col-span-5 pl-4">
                <div class="grid grid-cols-4 gap-1 md:gap-4">
                  <div
                    class="
                      flex
                      justify-center
                      col-span-2
                      md:col-span-1
                      text-yellow-600
                      border-2 border-yellow-600
                      rounded-md
                      hover:bg-yellow-600
                      hover:text-black
                    "
                  >
                    Edit
                  </div>

                  <div
                    class="
                      flex
                      justify-center
                      col-span-2
                      md:col-span-1
                      text-red-700
                      border-2 border-red-700
                      rounded-md
                      hover:bg-red-700
                      hover:text-white
                    "
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </e-com-layout>
</template>

<script>
import eComLayout from "@/Layouts/eComLayout";

export default {
  props: { footerLinks: Array, products: Array },
  components: {
    eComLayout,
  },
};
</script>