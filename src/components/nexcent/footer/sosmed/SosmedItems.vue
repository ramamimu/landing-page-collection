<script setup lang="ts">
const sosmedItems = [
  {
    name: "globe",
    link: "https://www.facebook.com/",
    icon: "footer-globe.svg",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/nexcent.id",
    icon: "footer-ig.svg",
  },
  {
    name: "twitter",
    link: "https://www.x.com",
    icon: "footer-twitter.svg",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/",
    icon: "footer-youtube.svg",
  },
];
</script>
<template>
  <div class="flex justify-center gap-4">
    <a v-for="item in sosmedItems" :key="item.name" :href="item.link">
      <img
        :src="`/src/assets/nexcent/icons/${item.icon}`"
        :alt="item.name"
        class="h-10 w-10 rounded-full bg-slate-600 p-2"
      />
    </a>
  </div>
</template>
