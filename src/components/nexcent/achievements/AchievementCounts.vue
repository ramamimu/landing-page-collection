<script setup lang="ts">
import CountItem from "./CountItem.vue";

const counts = [
  {
    title: "Members",
    count: "2,245,341",
    icon: "/src/assets/nexcent/icons/achievement-member.png",
  },
  {
    title: "Clubs",
    count: "46,328",
    icon: "/src/assets/nexcent/icons/achievement-club.png",
  },
  {
    title: "Event Bookings",
    count: "828,867",
    icon: "/src/assets/nexcent/icons/achievement-booking.png",
  },
  {
    title: "Payments",
    count: "1,926,436",
    icon: "/src/assets/nexcent/icons/achievement-payment.png",
  },
];
</script>
<template>
  <div class="grid grid-cols-1 justify-center gap-5 xl:grid-cols-2">
    <CountItem
      v-for="count in counts"
      :key="count.title"
      :title="count.title"
      :count="count.count"
      :icon="count.icon"
      class="justify-self-start"
    />
  </div>
</template>
