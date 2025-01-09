<template>
  <img
    v-for="n in 6"
    :key="n"
    :src="`/src/assets/nexcent/images/client-logo-${n}.png`"
    alt=""
  />
</template>
