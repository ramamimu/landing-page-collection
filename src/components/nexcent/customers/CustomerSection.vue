<script setup lang="ts">
import ClientImages from "@/components/nexcent/clients/ClientImages.vue";
import ButtonExploration from "../templates/ButtonExploration.vue";
</script>

<template>
  <section class="bg-nexcent-silver">
    <div class="nexcent-image-text-section">
      <div class="mx-5 px-5 py-10">
        <img
          src=""
          alt=""
          class="h-64 w-64 border bg-green-200 xl:h-96 xl:w-96"
        />
      </div>
      <div class="flex flex-col gap-5">
        <p class="font-light">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <div class="flex flex-col gap-2">
          <p class="text-xl font-semibold text-nexcent-primary">Tim Smith</p>
          <p class="font-extralight">British Dragon Boat Racing Association</p>
        </div>
        <div class="grid items-center gap-10 sm:grid-cols-3 sm:gap-2">
          <div class="flex flex-row flex-wrap justify-around sm:col-span-2">
            <ClientImages />
          </div>
          <ButtonExploration text="Meet all customers" />
        </div>
      </div>
    </div>
  </section>
</template>
