<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  buttonText: String,
  image: String,
});
</script>

<template>
  <section
    class="container mx-auto my-10 grid grid-cols-1 items-center justify-items-center gap-10 px-5 py-10 font-inter md:grid-cols-2"
  >
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
