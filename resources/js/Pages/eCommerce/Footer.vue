<template>
  <div class="">
    <div
      class="grid grid-cols-3 gap-2 w-full bg-gray-700 text-gray-100 uppercase"
    >
      <div class="col-span-1">
        <div class="flex justify-center">Help & Info</div>
      </div>
      <div class="flex justify-center">About Us</div>
      <div class="flex justify-center">More..</div>
    </div>

    <footer>
      <div
        class="
          font-serif
          bg-gray-100
          text-xs text-gray-600
          flex
          justify-center
          items-center
          p-6
        "
      >
        © {{ new Date().getFullYear() }} by Pad6y.com All rights reserved.
      </div>
    </footer>
  </div>
</template>