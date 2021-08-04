<template>
  <e-com-layout :links="footerLinks">
    <template #title>
      <div class="md:mr-24 text-lg lg:text-base md:text-3xl flex items-center">
        Manage Orders
      </div>
    </template>

    <div class="w-full lg:w-4/5 md:mx-auto">
      <div
        class="py-2 px-1 md:p-4 text-gray-800 uppercase font-bold bg-gray-200"
      >
        <div class="text-xs md:text-sm">
          <div class="grid grid-cols-12 p-2 text-white bg-gray-500">
            <div class="col-span-1 md:pl-2">Id</div>
            <div class="col-span-7 md:col-span-5">Transaction id</div>
            <div class="col-span-4 pl-4">Actions</div>
          </div>

          <div v-for="(item, index) in orders" :key="index">
            <div
              class="grid grid-cols-12 p-1 md:p-2 text-gray-600"
              :class="{ 'bg-white p-1': index % 2 === 0 }"
            >
              <div class="col-span-1 md:pl-2">{{ item.id }}</div>
              <div class="col-span-7 md:col-span-5 text-blue-600 underline">
                <inertia-link :href="route('eCommerce.order.show', item.id)">{{
                  item.transaction_id
                }}</inertia-link>
              </div>

              <div class="col-span-4 md:col-span-5 pl-4">
                <div class="grid grid-cols-4 gap-1 md:gap-4">
                  <div class="col-span-2 md:col-span-1">
                    <form @submit.prevent="submit(item.id)">
                      <dynamic-ecommerce-button
                        type="submit"
                        :class="'flex justify-center w-full uppercase font-bold text-red-700 border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white'"
                        >Delete</dynamic-ecommerce-button
                      >
                    </form>
                  </div>

                  <!-- <div class="col-span-2 md:col-span-1">
                    <dynamic-ecommerce-button
                      :class="'flex justify-center w-full uppercase font-bold text-green-600 border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white'"
                      >PDF</dynamic-ecommerce-button
                    >
                  </div> -->
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
import DynamicEcommerceButton from "@/Components/DynamicEcommerceButton";
import formatCurrency from "@/Mixins/formatCurrency";

export default {
  props: { footerLinks: Array, orders: Array },
  mixins: [formatCurrency],
  components: {
    eComLayout,
    DynamicEcommerceButton,
  },
  methods: {
    submit(id) {
      this.$inertia.delete(this.route("eCommerce.order.destroy", id), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "You have successfully deleted order!",
          });
        },
      });
    },
  },
};
</script>