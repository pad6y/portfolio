<template>
  <jet-action-section>
    <template #description>
      Orders completed from eCommerce Demo Page.</template
    >

    <template #content>
      <div class="w-full mx-auto text-sm">
        <div class="text-sm pb-2">Order History</div>

        <div class="md:ml-1">
          <div class="grid grid-cols-12 mb-2 text-white bg-gray-500">
            <div class="col-span-9 md:col-span-7 pl-2">Transaction id</div>
            <div class="hidden md:grid md:col-span-2">Order id</div>
            <div class="col-span-3 pl-2">Total amount</div>
          </div>

          <div v-for="(item, index) in $page.props.user.orders" :key="index">
            <div
              class="grid grid-cols-12 mb-2 text-gray-600 text-xs md:text-sm"
            >
              <div class="col-span-9 md:col-span-7 pl-2">
                {{ item.transaction_id }}
              </div>
              <div class="hidden md:grid md:col-span-2">{{ item.id }}</div>
              <div class="col-span-3 pl-2">
                {{ formatCurrency(item.total) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </jet-action-section>
</template>



<script>
import JetActionSection from "@/Jetstream/ActionSection";

export default {
  components: {
    JetActionSection,
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
