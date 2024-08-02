<template>
  <div class="rounded-2xl border border-neutral-100 p-2 space-y-4">
    <img class="cursor-pointer w-full" :src="collection.image" alt="" />
    <div
      class="flex justify-between items-center text-neutral-800 font-bold text-base"
    >
      <span>{{ collection.name }}</span>
      <div class="flex space-x-1 items-center">
        <img class="w-5 h-5" src="~/assets/img/icons/ethereum.svg" alt="" />
        <span>{{ collection.price }}</span>
      </div>
    </div>
    <div>
      <Link
        to="#"
        class="hover:bg-black transition-colors duration-100 hover:text-white border text-neutral-800 border-neutral-800 py-2 w-full text-center block rounded-lg"
        >Place a Bid</Link
      >
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import Link from '~/components/base/Link.vue';
const props = defineProps({
  collection: {
    type: Object,
    required: true,
  },
});
</script>
