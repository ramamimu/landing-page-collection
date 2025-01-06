<script setup lang="ts">
import CommunityCard from "./CommunityCard.vue";

interface Community {
  image: string;
  title: string;
  description: string;
}

const communityItems: Community[] = [
  {
    image: "/src/assets/nexcent/images/community-membership-organization.svg",
    title: "Membership Organizations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: "/src/assets/nexcent/images/community-national-association.svg",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: "/src/assets/nexcent/images/community-clubs-and-group.svg",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
</script>

<template>
  <div class="flex flex-row flex-wrap justify-around">
    <CommunityCard
      v-for="item in communityItems"
      :key="item.title"
      :image="item.image"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>
