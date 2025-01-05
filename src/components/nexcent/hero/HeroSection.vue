<script setup lang="ts">
import HeroText from "./HeroText.vue";
</script>
<template>
  <section class="bg-nexcent-silver py-10 sm:py-16">
    <div
      class="container mx-auto grid grid-rows-1 items-center justify-items-center gap-10 px-5 lg:grid-cols-2"
    >
      <HeroText />
      <img
        src="@/assets/nexcent/images/hero-illustration.png"
        alt=""
        class="w-56 justify-self-center md:w-auto lg:order-2"
      />
    </div>
  </section>
</template>
