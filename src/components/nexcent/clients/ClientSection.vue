<template>
  <section class="container mx-auto my-10 flex flex-col px-5 py-10">
    <div class="flex flex-col items-center gap-5 py-10 font-inter">
      <p class="text-5xl font-semibold text-slate-700 md:text-6xl">
        Our Clients
      </p>
      <p class="text-center text-lg font-light md:text-xl">
        We have been working with some Fortune 500+ clients
      </p>
    </div>
    <div class="my-5 flex flex-row flex-wrap justify-around gap-2">
      <img
        v-for="n in 6"
        :key="n"
        :src="`/src/assets/nexcent/images/client-logo-${n}.png`"
        alt=""
      />
    </div>
  </section>
</template>
