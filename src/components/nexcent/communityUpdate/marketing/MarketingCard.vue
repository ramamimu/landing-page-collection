<script setup lang="ts">
import ButtonExploration from "../../templates/ButtonExploration.vue";

defineProps({
  text: String,
});
</script>
<template>
  <div>
    <div
      class="sn:h-60 flex h-64 max-w-[360px] flex-col justify-around rounded-xl bg-nexcent-silver p-5 text-center shadow-xl"
    >
      <p class="text-2xl font-medium text-slate-600">
        {{ text }}
      </p>
      <ButtonExploration class="" text="Readmore" />
    </div>
  </div>
</template>
