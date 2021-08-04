<template>
  <e-com-layout :links="footerLinks">
    <ecommerces-admin-header>
      <template #title>
        <div class="text-base md:text-3xl md:mr-24">Order Summary</div>
      </template>
    </ecommerces-admin-header>

    <div class="w-full lg:w-4/5 md:mx-auto">
      <div class="flex flex-col bg-gray-200">
        <div class="w-full md:w-2/3 mx-auto p-2 md:p-8 mb-4">
          Thank you for trying out the eCommerce demo. This is the summary of
          your order. Details of it has been saved to the database. However I
          currently dont plan to create a section in the user account section to
          display your order. Simply because its just repeating the same process
          that I have already demonstrated. Perhaps one day when I have spare
          time this feature will be added. If so it will be announced on the
          newsfeed section in the future. Thanks again and have a nice day!
        </div>

        <div class="w-full md:w-2/3 mx-auto p-2 md:p-8 font-semibold text-sm">
          <div class="text-xl pb-10">Order Summary</div>

          <div class="md:ml-4">
            <div class="grid grid-cols-2 mb-2">
              <!-- v-if="orderDetails.user_id === this.$page.props.user.id" -->
              <div class="col-span-1">
                Name: {{ this.$page.props.user.name }}
              </div>
              <div class="col-span-1">
                Email: {{ this.$page.props.user.email }}
              </div>
            </div>

            <div class="grid grid-cols-2 mb-2">
              <div class="col-span-2 mb-2">
                Stripe Transaction ID: {{ orderDetails.transaction_id }}
              </div>
              <div class="col-span-1">Order No: {{ orderDetails.id }}</div>
            </div>

            <div class="grid grid-cols-3 mb-2 text-white bg-gray-500">
              <div class="col-span-1 pl-2">Product Name</div>
              <div class="col-span-1 pl-2">Qty</div>
              <div class="col-span-1 pl-2">Price</div>
            </div>

            <div v-for="(item, index) in orderDetails.products" :key="index">
              <div class="grid grid-cols-3 mb-2 text-gray-600">
                <div class="col-span-1 pl-2">{{ item.product_name }}</div>
                <div class="col-span-1 pl-2">{{ item.pivot.qty }}</div>
                <div class="col-span-1 pl-2">
                  {{ formatCurrency(item.product_price) }}
                </div>
              </div>
            </div>

            <div class="flex justify-end pb-10 mr-8">
              Total: {{ formatCurrency(orderDetails.total) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </e-com-layout>
</template>

<script>
import eComLayout from "@/Layouts/eComLayout";
import EcommercesAdminHeader from "@/Components/EcommercesAdminHeader.vue";

export default {
  props: { footerLinks: Array, orderDetails: Object },
  components: {
    eComLayout,
    EcommercesAdminHeader,
  },
  methods: {
    formatCurrency(price) {
      price = price / 100;
      return price.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      });
    },
  },
};
</script>
