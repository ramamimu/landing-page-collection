<script setup lang="ts">
defineProps({
  title: String,
  count: String,
  icon: String,
});
</script>
<template>
  <div class="flex items-center gap-5">
    <img :src="icon" alt="" class="w-12" />
    <div class="text-slate-700">
      <p class="text-3xl font-semibold">{{ count }}</p>
      <p>{{ title }}</p>
    </div>
  </div>
</template>
