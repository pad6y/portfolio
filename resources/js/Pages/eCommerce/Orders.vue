<template>
  <e-com-layout :links="footerLinks">
    <template #title>
      <div class="md:pl-10 text-base md:text-3xl md:mr-24">Manage Orders</div>
    </template>

    <div class="w-full lg:w-4/5 md:mx-auto">
      <div
        class="py-2 px-1 md:p-4 text-gray-800 uppercase font-bold bg-gray-200"
      >
        <div class="text-xs md:text-sm">
          <div class="grid grid-cols-12 p-2 text-white bg-gray-500">
            <div class="col-span-1 md:pl-2">Id</div>
            <div class="col-span-7 md:col-span-5">Transaction id</div>
            <div class="col-start-9 col-end-9 md:col-span-2 md:visible">
              Total
            </div>
            <div class="col-span-4 pl-4">Actions</div>
          </div>

          <div v-for="(item, index) in orders" :key="index">
            <div
              class="grid grid-cols-12 p-1 md:p-2 text-gray-600"
              :class="{ 'bg-white p-1': index % 2 === 0 }"
            >
              <div class="col-span-1 md:pl-2">{{ item.id }}</div>
              <div class="col-span-7 md:col-span-5">
                {{ item.transaction_id }}
              </div>
              <div class="invisible md:col-span-2 md:visible text-yellow-500">
                {{ formatCurrency(item.total) }}
              </div>

              <div class="col-span-4 pl-4">
                <div class="grid grid-cols-4 gap-1 md:gap-4">
                  <div
                    class="
                      flex
                      justify-center
                      col-span-2
                      text-red-700
                      border-2 border-red-700
                      rounded-md
                      hover:bg-red-700
                      hover:text-white
                    "
                  >
                    Delete
                  </div>

                  <div
                    class="
                      flex
                      justify-center
                      col-span-2
                      text-green-600
                      border-2 border-green-600
                      rounded-md
                      hover:bg-green-600
                      hover:text-white
                    "
                  >
                    PDF
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

import formatCurrency from "@/Mixins/formatCurrency";

export default {
  props: { footerLinks: Array, orders: Array },
  mixins: [formatCurrency],
  components: {
    eComLayout,
  },
};
</script>