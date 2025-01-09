<script setup lang="ts">
import MarketingItems from "./marketing/MarketingItems.vue";
import CommunityText from "./text/CommunityText.vue";
</script>

<template>
  <section
    class="container mx-auto my-10 flex flex-col items-stretch px-5 pb-20 pt-10"
  >
    <CommunityText />
    <MarketingItems />
  </section>
</template>
