<template>
  <e-com-layout :links="footerLinks">
    <template #title>
      <div class="md:mr-24 text-lg lg:text-base md:text-3xl flex items-center">
        Clients Order
      </div>
    </template>

    <div class="w-full lg:w-4/5 md:mx-auto">
      <div
        class="py-2 px-1 md:p-4 text-gray-800 uppercase font-bold bg-gray-200"
      >
        <div class="w-full md:w-2/3 bg-white mx-auto p-1 lg:p-4">
          <div class="flex justify-center border-b-2 border-gray-400">
            Order ID: {{ order.id }}
          </div>

          <div class="grid grid-cols-2 text-sm bg-gray-400 text-white mt-4 p-1">
            <div class="col-span-1">Client Name:</div>
            <div class="col-span-1">Purchase Date:</div>
          </div>

          <div class="grid grid-cols-2 text-xs md:text-xs text-gray-800 p-1">
            <div class="col-span-1">{{ order.user.name }}</div>
            <div class="col-span-1">{{ order.created_at }}</div>
          </div>

          <div class="text-xs bg-gray-600 text-white p-1">User Email:</div>
          <div class="text-xs text-gray-800 p-1">
            {{ order.user.email }}
          </div>

          <div class="text-sm bg-gray-400 text-white mt-1 p-1">
            Transaction ID:
          </div>
          <div class="text-xs text-gray-800 p-1">
            {{ order.transaction_id }}
          </div>

          <div class="text-sm bg-gray-400 text-white mt-1 p-1">
            Purchase Details
          </div>
          <div class="grid grid-cols-12 text-xs bg-gray-600 text-white p-1">
            <div class="col-span-3">Product name</div>
            <div class="col-span-6">Product description</div>
            <div class="col-span-1 flex justify-center">Qty</div>
            <div class="col-span-2 lg:col-span-1">Price</div>
          </div>
          <div
            class="text-xs text-gray-800 pt-1"
            v-for="(item, index) in order.products"
            :key="index"
          >
            <div class="grid grid-cols-12 text-xs font-normal p-1">
              <div class="col-span-3">{{ item.product_name }}</div>
              <div class="col-span-6 lg:col-span-7">
                {{ item.product_description }}
              </div>
              <div class="col-span-1 flex justify-center">
                {{ item.pivot.qty }}
              </div>
              <div class="col-span-2 lg:col-span-1">
                {{ formatCurrency(item.product_price) }}
              </div>
            </div>
          </div>
          <div class="flex justify-end text-sm p-1 mt-8">
            <div class="">Total : {{ formatCurrency(order.total) }}</div>
          </div>
        </div>

        <div class="flex justify-end w-full md:w-2/3 md:mx-auto text-sm">
          <dynamic-ecommerce-button
            @click="back()"
            :class="'w-auto mt-4 mr-1 px-2 uppercase font-bold text-gray-600 bg-white border-2 border-gray-400 rounded-sm hover:bg-gray-500 hover:text-white'"
            >Go Back</dynamic-ecommerce-button
          >
        </div>
      </div>
    </div>
  </e-com-layout>
</template>

<script>
import eComLayout from "@/Layouts/eComLayout";
import formatCurrency from "@/Mixins/formatCurrency";
import DynamicEcommerceButton from "@/Components/DynamicEcommerceButton";

export default {
  mixins: [formatCurrency],
  components: {
    eComLayout,
    DynamicEcommerceButton,
  },
  inheritAttrs: false,
  props: {
    footerLinks: [],
    order: {},
  },
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>