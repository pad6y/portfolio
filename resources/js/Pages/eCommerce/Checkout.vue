<template>
  <div class="w-full">
    <div
      class="
        lg:w-2/3
        mx-auto
        py-4
        flex
        justify-center
        mt-4
        text-3xl
        uppercase
        font-bold
        tracking-widest
        bg-gold-text
        text-gray-600
      "
    >
      Checkout Page
    </div>
    <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
      <div class="py-4 pl-2 text-lg">Your Current Cart Items</div>
      <table class="table-auto w-11/12 text-left whitespace-no-wrap mx-auto">
        <thead>
          <tr>
            <th
              class="
                px-4
                py-3
                title-font
                tracking-wider
                font-medium
                text-gray-900 text-sm
                bg-gray-200
                rounded-tl rounded-bl
              "
            >
              Item
            </th>
            <th
              class="
                px-4
                py-3
                title-font
                tracking-wider
                font-medium
                text-gray-900 text-sm
                bg-gray-200
              "
            >
              Quantity
            </th>
            <th
              class="
                px-4
                py-3
                title-font
                tracking-wider
                font-medium
                text-gray-900 text-sm
                bg-gray-200
              "
            >
              Price
            </th>
            <th
              class="
                px-4
                py-3
                title-font
                tracking-wider
                font-medium
                text-gray-900 text-sm
                bg-gray-200
              "
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart.items" :key="index">
            <td class="p-4" v-text="item.product_name"></td>
            <td class="p-4">
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
            </td>
            <td class="p-4" v-text="cartLineTotal(item)"></td>
            <td class="w-10 text-right">
              <button
                class="
                  flex
                  ml-auto
                  mr-2
                  text-sm text-gray-600
                  bg-yellow-300
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  hover:bg-yellow-500
                  rounded
                "
                @click.capture.stop="removeFromCart(index)"
              >
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td class="p-4 font-bold">Total Amount</td>
            <!-- <td class="p-4 font-bold" v-text="cartQuantity"></td> -->
            <td class="p-4 font-bold" v-text="cartTotal"></td>
            <td class="w-10 text-right"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="lg:w-2/3 w-full mx-auto mt-8">
      <div class="flex flex-wrap -mx-2 mt-8 ml-1 md:ml-12">
        <div class="p-2 w-3/6 md:w-1/3">
          <div class="relative">
            <label for="first_name" class="leading-7 text-sm text-gray-600"
              >Name</label
            >
            <input
              type="text"
              id="first_name"
              name="first_name"
              class="
                w-full
                bg-gray-100
                rounded
                border border-gray-300
                focus:border-yellow-300
                focus:ring-transparent
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
              v-model="customer.name"
              :disabled="paymentProcessing"
            />
          </div>
        </div>

        <div class="p-2 w-3/6 md:w-1/3">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email Address</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="
                w-full
                bg-gray-100
                rounded
                border border-gray-300
                focus:border-yellow-300
                focus:ring-transparent
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
              v-model="customer.email"
              :disabled="paymentProcessing"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-2 mt-4">
        <div class="p-2 w-full md:w-4/6 ml-2 md:ml-14 md:pr-11">
          <div class="relative">
            <label
              for="card-element"
              class="leading-7 text-sm text-gray-600 ml-1"
              >Credit Card Info (stripe uk visa test card num:
              4000008260000000)</label
            >
            <div id="card-element"></div>
          </div>
        </div>
      </div>
      <div class="p-2 w-full">
        <button
          class="
            flex
            mx-auto
            text-gray-600
            bg-yellow-300
            border-0
            py-2
            px-8
            focus:outline-none
            hover:bg-yellow-500
            rounded
            text-lg
          "
          @click="processPayment"
          :disabled="paymentProcessing"
          v-text="paymentProcessing ? 'Processing' : 'Pay Now'"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from "@/Components/Icons";
import { loadStripe } from "@stripe/stripe-js";

export default {
  components: {
    Icons,
  },
  data() {
    return {
      stripe: {},
      cardElement: {},
      customer: {
        name: this.$page.props.user.name,
        // last_name: "",
        email: this.$page.props.user.email,
        //   address: "",
        //   city: "",
        //   state: "",
        //   zip_code: "",
      },
      cart: {
        items: [],
      },
      paymentProcessing: false,
    };
  },
  async mounted() {
    this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY);
    const elements = this.stripe.elements();
    this.cardElement = elements.create("card", {
      classes: {
        base: "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out",
      },
    });
    this.cardElement.mount("#card-element");
  },
  methods: {
    updateItemQty: function () {
      localStorage.setItem("cart", JSON.stringify(this.cart.items));
    },
    cartLineTotal(item) {
      let amount = item.product_price * item.qty;
      amount = amount / 100;
      return amount.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      });
    },
    removeFromCart(index) {
      this.cart.items.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart.items));
    },
    async processPayment() {
      this.paymentProcessing = true;
      const { paymentMethod, error } = await this.stripe.createPaymentMethod(
        "card",
        this.cardElement,
        {
          billing_details: {
            name: this.customer.name,
            email: this.customer.email,
            //           address: {
            //             line1: this.customer.address,
            //             city: this.customer.city,
            //             state: this.customer.state,
            //             postal_code: this.customer.zip_code,
            //           },
          },
        }
      );
      if (error) {
        this.paymentProcessing = false;
        // console.error(error);
      } else {
        // console.log(paymentMethod);
        this.customer.payment_method_id = paymentMethod.id;
        this.customer.amount = this.cart.items.reduce(
          (acc, item) => acc + item.product_price * item.qty,
          0
        );
        this.customer.cart = JSON.stringify(this.cart.items);
        // console.log(this.customer);
        this.$inertia.post("/eCommerce/checkout", this.customer, {
          onSuccess: () => {
            Toast.fire({
              icon: "success",
              title: "You have successfully paid for you items!",
            });
            this.paymentProcessing = false;
            localStorage.removeItem("cart");
          },
        });
      }
    },
  },
  created() {
    this.cart.items = JSON.parse(localStorage.getItem("cart") || "[]");
  },
  computed: {
    cartTotal() {
      // let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      let amount = this.cart.items.reduce(
        (acc, item) => acc + item.product_price * item.qty,
        0
      );
      amount = amount / 100;
      return amount.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      });
    },
  },
};
</script>