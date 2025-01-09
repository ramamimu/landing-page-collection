<script setup lang="ts">
import MarketingCard from "./MarketingCard.vue";

const texts: string[] = [
  "Creating Streamlined Safeguarding Processes with OneRen",
  "What are your safeguarding responsibilities and how can you manage them?",
  "Revamping the Membership Model with Triathlon Australia",
];
</script>
<template>
  <div class="flex flex-row flex-wrap justify-around gap-5">
    <MarketingCard v-for="text in texts" :key="text" :text="text" />
  </div>
</template>
