<script setup lang="ts">
import HeaderAuth from "./header-auth/HeaderAuth.vue";
import HeaderMenu from "./header-menu/HeaderMenu.vue";
import HeaderLogo from "./header-logo/HeaderLogo.vue";
</script>

<template>
  <div class="container mx-auto my-5 flex items-center justify-between">
    <HeaderLogo />
    <HeaderMenu />
    <HeaderAuth />
  </div>
</template>
