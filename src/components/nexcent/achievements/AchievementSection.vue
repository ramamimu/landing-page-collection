<script setup lang="ts">
import AchievementCounts from "./AchievementCounts.vue";
import AchievementText from "./AchievementText.vue";
</script>

<template>
  <section class="bg-nexcent-silver">
    <div class="container mx-auto my-10 grid gap-10 px-5 py-24 md:grid-cols-2">
      <AchievementText />
      <AchievementCounts />
    </div>
  </section>
</template>
