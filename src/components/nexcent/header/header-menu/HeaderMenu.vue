<script setup lang="ts">
import { ref } from "vue";

interface Menu {
  text: string;
  url: string;
}

const menus = ref<Menu[]>([
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
  <div class="flex gap-5">
    <div
      v-for="menu in menus"
      :key="menu.text"
      class="cursor-pointer hover:text-slate-500"
    >
      {{ menu.text }}
    </div>
  </div>
</template>
