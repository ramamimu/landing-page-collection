<script setup lang="ts">
import HeaderLogo from "../logo/HeaderLogo.vue";
import HeaderMenuIcon from "../menu/HeaderMenuIcon.vue";
import HeaderMenuList from "../menu/HeaderMenuList.vue";

defineProps({
  isMenuActive: Boolean,
});
</script>

<template>
  <div
    class="bg-nexcent-silver fixed h-screen w-screen overflow-auto xl:hidden"
    v-if="isMenuActive"
  >
    <div
      class="container mx-auto flex items-center justify-between px-5 py-5 xl:flex"
    >
      <HeaderLogo />
      <HeaderMenuIcon
        :isMenuActive="isMenuActive"
        @setMenu="() => $emit('setMenu')"
      />
    </div>
    <HeaderMenuList class="container mx-auto px-5 py-10" />
  </div>
</template>
