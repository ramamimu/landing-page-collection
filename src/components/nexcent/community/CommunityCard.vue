<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="m-5 flex w-80 flex-col gap-3 rounded-md p-6 shadow-md">
    <img :src="image" alt="" class="mx-auto" />
    <h3
      class="text-center text-2xl font-semibold leading-snug text-slate-700 md:text-3xl"
    >
      {{ title }}
    </h3>
    <p class="text-center font-light">
      {{ description }}
    </p>
  </div>
</template>
