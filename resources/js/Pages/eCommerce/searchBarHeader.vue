<template>
  <div class="">
    <div class="flex justify-between h-16 p-4 pb-8 bg-gray-100">
      <div class="flex-shrink-0 flex items-center relative">
        <inertia-link :href="route('newsfeed.index')">
          <jet-application-mark class="block h-9 w-auto" />
          <div
            class="
              absolute
              bottom-0
              top-3
              left-1
              items-end
              text-gray-500 text-lg
            "
          >
            Ecommerce
          </div>
        </inertia-link>
      </div>

      <!-- Search bar -->

      <div class="flex text-gray-500 ml-4 mr-2 sm:mr-24 sm:ml-20 mt-1 w-2/3">
        <input
          @keydown.enter="onInput"
          @keyup.enter="reset"
          id="search"
          type="text"
          placeholder="Search Products"
          class="
            block
            w-full
            h-8
            pl-10
            border-2 border-yellow-300
            rounded-full
            shadow-md
            focus:border-yellow-300
            focus:ring-transparent
          "
        />
        <i class="absolute active:hidden p-1 ml-2"
          ><icons :name="'search'" :class="'h-5 w-5'"></icons
        ></i>
      </div>

      <!-- shopping cart dropdown -->

      <div class="text-gray-500 sm:pl-2 mt-1 mr-2">
        <jet-dropdown :contentClasses="'w-56 sm:w-64 lg:w-72 bg-white'">
          <template #trigger>
            <icons :name="'cart'" class="relative" :class="'h-6 w-6'"></icons>
            <div
              v-if="cartItems.items != 0"
              class="
                flex
                justify-center
                items-center
                absolute
                top-0
                left-3
                h-3
                w-3
                text-white
                font-bold
                text-xs
                bg-red-600
                rounded-full
              "
            >
              {{ cartItems.items.length }}
            </div>
            <div v-else class="hidden"></div>
          </template>

          <template #content>
            <div class="flex justify-center font-bold p-2">Shopping Cart</div>
            <div v-for="(item, index) in cartItems.items" :key="index">
              <div
                class="
                  grid grid-cols-7
                  mx-2
                  pt-4
                  text-xs
                  border-t-2 border-gray-300
                  my-2
                "
              >
                <img
                  :src="item.product_image"
                  :alt="'image unavailable'"
                  class="col-span-2"
                />
                <div class="col-span-5 p-2">
                  <div class="grid grid-rows-2">
                    <div class="pb-6">{{ item.product_name }}</div>
                    <div class="grid grid-cols-2">
                      <div class="flex items-center ml-2">
                        <button
                          class=""
                          @click.capture.stop="removeFromCart(index)"
                        >
                          <icons :name="'bin'" :class="'h-4 w-4'"></icons>
                        </button>
                      </div>
                      <div class="flex justify-end items-center mt-2">
                        £{{ item.product_price.toFixed(2) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end p-3 bg-gray-400 text-white">
              Sub-Total: {{ grandTotal.toFixed(2) }}
            </div>
            <div class="flex justify-end p-2">
              <gold-button
                class="font-bold"
                :href="route('eCommerce.checkout', cartItems)"
                >Checkout</gold-button
              >
            </div>
          </template>
        </jet-dropdown>
      </div>

      <!-- User Account -->
      <div class="text-gray-500 mr-2 sm:mr-4 md:mr-10 mt-1">
        <inertia-link :href="route('profile.show')">
          <icons :name="'account'"></icons>
        </inertia-link>
      </div>
    </div>

    <!-- SUB Nav Bar -->

    <div
      class="
        flex
        justify-center
        items-center
        bg-gray-700
        h-10
        uppercase
        text-xs
        sm:text-lg
        text-gray-100
      "
    >
      <inertia-link
        :href="route('eCommerce.index')"
        class="p-4 md:p-2"
        :class="
          route().current('eCommerce.index')
            ? 'text-gray-50 bg-gray-500'
            : 'hover:text-gray-50 hover:bg-gray-500'
        "
        >All Products</inertia-link
      >
      <div class="p-2 hover:bg-gray-500">Mens</div>
      <div class="p-2 hover:bg-gray-500">Womens</div>
      <inertia-link
        :href="route('eCommerce.adminPanel')"
        class="p-4 md:p-2"
        :class="
          route().current('eCommerce.adminPanel')
            ? 'text-gray-50 bg-gray-500'
            : 'hover:text-gray-50 hover:bg-gray-500'
        "
        >Admin Panel</inertia-link
      >
    </div>
  </div>
</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import Icons from "@/Components/Icons";
import JetDropdown from "@/Jetstream/Dropdown";
import GoldButton from "@/Components/GoldButton";

export default {
  components: {
    JetApplicationMark,
    JetDropdown,
    Icons,
    GoldButton,
  },
  props: ["cart"],
  data() {
    return {
      cartItems: this.cart,
    };
  },
  computed: {
    grandTotal: function () {
      return this.cartItems.items.reduce((total, item) => {
        return (total += item.product_price);
      }, 0);
    },
  },
  emits: ["termChange", "removeItem"],
  inheritAttrs: false,
  methods: {
    onInput: function (event) {
      this.$emit("termChange", event.target.value);
    },
    reset: function (event) {
      event.target.value = null;
    },
    removeFromCart: function (index) {
      this.$emit("removeItem", index);
    },
  },
};
</script>