<script setup lang="ts">
import ClientImages from "./ClientImages.vue";
</script>

<template>
  <section class="container mx-auto my-10 flex flex-col px-5 py-10">
    <div class="flex flex-col items-center gap-5 py-10 font-inter">
      <h2 class="nexcent-h2 text-center text-slate-700">Our Clients</h2>
      <p class="text-center text-lg font-light md:text-xl">
        We have been working with some Fortune 500+ clients
      </p>
    </div>
    <div class="my-5 flex flex-row flex-wrap justify-around gap-2">
      <ClientImages />
    </div>
  </section>
</template>
