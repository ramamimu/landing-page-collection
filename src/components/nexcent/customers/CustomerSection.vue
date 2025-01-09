<script setup lang="ts">
import ClientImages from "@/components/nexcent/clients/ClientImages.vue";
</script>

<template>
  <section class="bg-nexcent-silver">
    <div class="nexcent-image-text-section">
      <img src="" alt="" class="min-h-96 min-w-96 border bg-green-200" />
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
        <div class="grid grid-cols-3 items-center gap-2">
          <div class="col-span-2 flex flex-row justify-around">
            <ClientImages />
          </div>
          <div
            class="col-span-1 cursor-pointer font-semibold italic text-nexcent-primary"
          >
            Meet all customers ->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
