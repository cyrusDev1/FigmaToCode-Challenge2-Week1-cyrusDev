<template>
  <div class="rounded-2xl bg-neutral-50 p-5 space-y-4">
    <img :src="sell.icon" />
    <h2 class="text-neutral-800 font-bold text-xl">{{ sell.title }}</h2>
    <p class="text-neutral-400 font-medium text-sm">{{ sell.description }}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import Link from '~/components/base/Link.vue';
const props = defineProps({
  sell: {
    type: Object,
    required: true,
  },
});
</script>
