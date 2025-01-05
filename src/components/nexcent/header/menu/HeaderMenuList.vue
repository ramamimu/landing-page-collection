<script setup lang="ts">
import { ref } from "vue";

interface Menu {
  text: string;
  url: string;
}

const menu = ref<Menu[]>([
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Service",
    url: "/",
  },
  {
    text: "Feature",
    url: "/",
  },
  {
    text: "Product",
    url: "/",
  },
  {
    text: "Testimonial",
    url: "/",
  },
  {
    text: "FAQ",
    url: "/",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-10 xl:flex-row">
    <div
      v-for="item in menu"
      :key="item.text"
      class="cursor-pointer px-3 py-2 text-2xl hover:bg-white xl:text-base"
    >
      {{ item.text }}
    </div>
  </div>
</template>
