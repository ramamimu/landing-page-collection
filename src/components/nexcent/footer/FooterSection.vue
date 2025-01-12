<script setup lang="ts">
import SosmedItems from "./sosmed/SosmedItems.vue";
</script>

<template>
  <section class="bg-slate-800">
    <div
      class="container mx-auto flex flex-wrap justify-around gap-8 px-5 py-10 text-slate-300 md:flex-nowrap"
    >
      <!-- Left Section -->
      <div class="flex w-full flex-col items-start gap-8 md:w-auto">
        <img
          src="/src/assets/nexcent/images/Logo-dark.svg"
          alt="Nexcent Logo"
        />
        <div class="leading-8">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <SosmedItems />
      </div>

      <!-- Middle Section -->
      <div
        class="flex w-full flex-wrap justify-between gap-8 md:w-auto md:gap-16"
      >
        <!-- Company Links -->
        <div class="w-1/2 md:w-auto">
          <h3 class="mb-4 text-lg font-medium">Company</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">About us</a></li>
            <li><a href="#" class="hover:underline">Blog</a></li>
            <li><a href="#" class="hover:underline">Contact us</a></li>
            <li><a href="#" class="hover:underline">Pricing</a></li>
            <li><a href="#" class="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        <div class="w-1/2 md:w-auto">
          <h3 class="mb-4 text-lg font-medium">Support</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Help center</a></li>
            <li><a href="#" class="hover:underline">Terms of service</a></li>
            <li><a href="#" class="hover:underline">Legal</a></li>
            <li><a href="#" class="hover:underline">Privacy policy</a></li>
            <li><a href="#" class="hover:underline">Status</a></li>
          </ul>
        </div>

        <div class="w-full md:w-auto">
          <h3 class="mb-4 text-lg font-medium">Stay up to date</h3>
          <div class="relative">
            <input
              type="text"
              class="w-full rounded-lg bg-slate-600 px-5 py-3 pr-10 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="Your email address"
            />
            <img
              src="/src/assets/nexcent/icons/footer-form.png"
              alt="Submit Icon"
              class="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
