<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<template>
  <div
    class="col-span-1 cursor-pointer text-lg font-medium text-nexcent-primary sm:text-2xl"
  >
    {{ text }} ->
  </div>
</template>
