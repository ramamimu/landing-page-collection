<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  buttonText: String,
  image: String,
});
</script>

<template>
  <section class="nexcent-image-text-section">
    <img :src="image" alt="" class="col-span-1" />
    <div class="col-span-1 flex flex-col gap-5 p-5 text-slate-700">
      <h2>{{ title }}</h2>
      <p class="font-light">
        {{ description }}
      </p>
      <div class="nexcent-button w-40">{{ buttonText }}</div>
    </div>
  </section>
</template>
