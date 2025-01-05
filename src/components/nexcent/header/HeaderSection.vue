<script setup lang="ts">
import HeaderAuth from "./menu/HeaderAuthentication.vue";
import HeaderMenuList from "./menu/HeaderMenuList.vue";
import HeaderLogo from "./logo/HeaderLogo.vue";
import HeaderMenuIcon from "./menu/HeaderMenuIcon.vue";
import HeaderResponsiveMenuList from "./menu/HeaderResponsiveMenuList.vue";

import { ref } from "vue";

const isMenuActive = ref(false);

const setMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};
</script>

<template>
  <HeaderResponsiveMenuList :isMenuActive="isMenuActive" @setMenu="setMenu" />
  <section class="bg-nexcent-silver">
    <div
      class="container mx-auto flex items-center justify-between px-5 py-5 xl:flex"
    >
      <HeaderLogo />
      <HeaderMenuList class="hidden xl:flex" />
      <HeaderAuth class="hidden xl:flex" />
      <HeaderMenuIcon :isMenuActive="isMenuActive" @setMenu="setMenu" />
    </div>
  </section>
</template>
