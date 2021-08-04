// Allows admins to CRUD product entries and shows product card preview section in eCommerce Admin Panel

<template>
  <div class="py-2 px-1 md:p-4 text-gray-800 uppercase font-bold bg-gray-200">
    Add Product:
    <div class="font-normal text-xs pb-4">
      This is where you add products and preview product cards
    </div>

    <div class="grid grid-cols-5 text-xs">
      <div class="col-span-3 bg-gray-100 p-2">
        <form id="create-product" @submit.prevent="submit">
          <div>Enter product data:</div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <input
                id="product_name"
                type="text"
                placeholder="Enter Product Name"
                class="
                  text-xs
                  mt-2
                  md:mt-4
                  block
                  w-full
                  border-2 border-yellow-300
                  rounded-md
                  shadow-sm
                  focus:border-yellow-300
                  focus:ring-transparent
                "
                v-model="form.product_name"
              />
              <jet-input-error
                :message="form.errors.product_name"
                class="mt-2"
              />
            </div>

            <div>
              <input
                id="gender"
                type="text"
                placeholder="Enter Product Gender"
                class="
                  text-xs
                  mt-2
                  md:mt-4
                  block
                  w-full
                  border-2 border-yellow-300
                  rounded-md
                  shadow-sm
                  focus:border-yellow-300
                  focus:ring-transparent
                "
                v-model="form.gender"
              />
              <jet-input-error :message="form.errors.gender" class="mt-2" />
            </div>
          </div>

          <div>
            <textarea
              id="product_description"
              placeholder="Enter Product Description"
              class="
                mt-2
                md:mt-4
                text-xs
                block
                w-full
                border-2 border-yellow-300
                rounded-md
                shadow-sm
                focus:border-yellow-300
                focus:ring-transparent
              "
              v-model="form.product_description"
            />
            <jet-input-error
              :message="form.errors.product_description"
              class="mt-2"
            />
          </div>

          <div class="grid grid-cols-3 gap-2">
            <div class="mt-2 md:mt-4">
              <label
                for="product_image"
                class="
                  text-xs text-gray-700
                  border-2 border-yellow-300
                  rounded-md
                  shadow-sm
                  h-9
                  bg-gold-lite
                  flex
                  justify-center
                  items-center
                  cursor-pointer
                  w-full
                  p-2
                  hover:bg-gold-md
                "
              >
                add image
              </label>
              <input
                @change="setImage"
                id="product_image"
                type="file"
                class="mt-2 mb-2 hidden"
              />
              <jet-input-error
                :message="form.errors.product_image"
                class="flex justify-center mt-2"
              />
            </div>

            <div>
              <input
                id="product_code"
                type="text"
                placeholder="Enter Product Code"
                class="
                  text-xs
                  mt-2
                  md:mt-4
                  block
                  w-full
                  border-2 border-yellow-300
                  rounded-md
                  shadow-sm
                  focus:border-yellow-300
                  focus:ring-transparent
                "
                v-model="form.product_code"
              />
              <jet-input-error
                :message="form.errors.product_code"
                class="mt-2"
              />
            </div>

            <div>
              <input
                id="product_price"
                type="text"
                placeholder="Enter Product price"
                class="
                  text-xs
                  mt-2
                  md:mt-4
                  block
                  w-full
                  border-2 border-yellow-300
                  rounded-md
                  shadow-sm
                  focus:border-yellow-300
                  focus:ring-transparent
                "
                v-model="form.product_price"
              />
              <jet-input-error
                :message="form.errors.product_price"
                class="mt-2"
              />
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <gold-button
              :type="'submit'"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
              class="font-bold text-gray-800"
            >
              Submit
            </gold-button>
          </div>
        </form>
      </div>

      <div class="col-span-2 bg-white pl-4 pt-2">
        Preview Card
        <div
          v-if="form.product_name"
          class="
            flex flex-col
            justify-center
            mx-auto
            w-3/6
            bg-gray-100
            mt-2
            mb-4
            shadow-md
            normal-case
          "
        >
          <div v-if="src" class="flex justify-center">
            <img :src="src" alt="image unavailable" class="w-auto" />
          </div>

          <div class="m-1 text-gray-600">{{ form.product_name }}</div>

          <div class="m-1">{{ form.product_description }}</div>

          <div class="flex justify-between text-xs mt-2 px-2 text-gray-400">
            <div class="">Gender: {{ form.gender }}</div>
            <div class="text-gray-700 font-semibold pr-4 flex justify-end">
              <!-- £ {{ product.product_price.toFixed(2) }} -->
              {{ formatCurrency(form.product_price) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JetInputError from "@/Jetstream/InputError";
import GoldButton from "@/Components/GoldButton";
import formatCurrency from "@/Mixins/formatCurrency";

export default {
  mixins: [formatCurrency],
  components: {
    JetInputError,
    GoldButton,
  },
  data() {
    return {
      form: this.$inertia.form(
        {
          product_name: "",
          gender: "",
          product_code: "",
          product_image: "",
          product_description: "",
          product_price: "",
        },
        {
          key: "product",
          remember: false,
        }
      ),
      src: null,
    };
  },

  methods: {
    // formatCurrency(price) {
    //   var priceNum = parseInt(price, 10);
    //   priceNum = priceNum / 100;
    //   // price = price / 100;
    //   return priceNum.toLocaleString("en-GB", {
    //     style: "currency",
    //     currency: "GBP",
    //   });
    // },
    submit() {
      this.form.post(this.route("eCommerce.product.store"), {
        preserveScroll: true,
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "You have successfully added product!",
          });
          this.form.reset();
        },
      });
    },
    setImage(e) {
      this.form.product_image = e.target.files[0];

      let reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        this.src = e.target.result;
      };
    },
  },
};
</script>