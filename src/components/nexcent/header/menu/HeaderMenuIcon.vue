<script setup lang="ts">
defineProps({
  isMenuActive: Boolean,
});
</script>

<template>
  <div class="block w-10 xl:hidden" @click="$emit('setMenu')">
    <img v-if="!isMenuActive" src="@/assets/nexcent/icons/menu.svg" />
    <img v-else src="@/assets/nexcent/icons/close.svg" />
  </div>
</template>
