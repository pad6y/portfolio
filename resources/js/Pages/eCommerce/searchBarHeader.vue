<template>
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
    <i class="absolute active:hidden p-1 ml-3"
      ><icons :name="'search'" :class="'h-4 w-4 mt-1'"></icons
    ></i>
  </div>

  <!-- shopping cart dropdown -->

  <div class="text-gray-500 mt-1 sm:ml-24 sm:pl-12">
    <jet-dropdown :contentClasses="'w-56 sm:w-64 lg:w-72 bg-white'">
      <template #trigger>
        <icons :name="'cart'" class="mt-1" :class="'h-6 w-6'"></icons>
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
        <div class="flex justify-center font-bold p-2 pt-2 text-sm">
          Shopping Cart
        </div>
        <div v-if="cartItems.items.length > 0">
          <div v-for="(item, index) in cartItems.items" :key="index">
            <div
              class="
                grid grid-cols-7
                mx-2
                pt-2
                text-xs
                border-t-2 border-gray-300
                mb-2
              "
            >
              <img
                :src="item.product_image"
                :alt="'image unavailable'"
                class="col-span-2"
              />
              <div class="col-span-5 p-2">
                <div class="grid grid-rows-2">
                  <div class="pb-3">{{ item.product_name }}</div>

                  <div class="flex flex-row p-1">
                    <button @click.capture.stop="updateItemQty(item.qty--)">
                      <icons :name="'minus'" :class="'h-4 w-4'"></icons>
                    </button>
                    <div class="flex items-center px-2">
                      {{ item.qty }}
                    </div>
                    <button @click.capture.stop="updateItemQty(item.qty++)">
                      <icons :name="'plus'" :class="'h-4 w-4'"></icons>
                    </button>
                  </div>

                  <div class="grid grid-cols-2 mt-1">
                    <div class="flex items-end ml-2">
                      <button @click.capture.stop="removeFromCart(index)">
                        <icons :name="'bin'" :class="'h-4 w-4'"></icons>
                      </button>
                    </div>
                    <div class="flex justify-end items-end mt-2">
                      {{ formatCurrency(item.product_price) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end p-3 bg-gray-400 text-white text-sm">
            Sub-Total:{{ formatCurrency(grandTotal) }}
          </div>

          <div class="flex justify-end p-2">
            <gold-button
              class="font-bold text-sm"
              :href="route('eCommerce.checkout')"
              >Checkout</gold-button
            >
          </div>
        </div>
        <div v-else class="pb-4">
          <p class="text-xs flex p-2 uppercase text-gray-100 bg-red-700">
            Empty Cart
          </p>
        </div>
      </template>
    </jet-dropdown>
  </div>

  <!-- User Account -->
  <div class="text-gray-500 sm:ml-8 sm:mr-4 md:mr-10 mt-1">
    <inertia-link :href="route('profile.show')">
      <icons :name="'account'" :class="'h-6 w-6 mt-1'"></icons>
    </inertia-link>
  </div>
</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import Icons from "@/Components/Icons";
import JetDropdown from "@/Jetstream/Dropdown";
import GoldButton from "@/Components/GoldButton";
import formatCurrency from "@/Mixins/formatCurrency";

export default {
  mixins: [formatCurrency],
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
        return (total += item.product_price * item.qty);
      }, 0);
    },
  },
  emits: ["termChange", "removeItem"],
  inheritAttrs: false,
  methods: {
    // formatCurrency(price) {
    //   price = price / 100;
    //   return price.toLocaleString("en-GB", {
    //     style: "currency",
    //     currency: "GBP",
    //   });
    // },
    onInput: function (event) {
      this.$emit("termChange", event.target.value);
    },
    reset: function (event) {
      event.target.value = null;
    },
    removeFromCart: function (index) {
      this.$emit("removeItem", index);
    },
    updateItemQty: function () {
      // let productInCartIndex = this.cartItems.items.findIndex(
      //   (item) => item.product_name === itemToUpdate.product_name
      // );
      // console.log(itemToUpdate);
      // this.cartItems.items[productInCartIndex].qty--;
      localStorage.setItem("cart", JSON.stringify(this.cartItems.items));
    },
  },
};
</script>