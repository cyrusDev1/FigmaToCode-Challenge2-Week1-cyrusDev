<template>
  <div class="my-16 space-y-8">
    <h2 class="text-neutral-800 font-bold text-xl">Create and Sell Now</h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-5 xl:px-0"
    >
      <div v-for="sell in sells">
        <Sell :sell="sell"></Sell>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Link from '~/components/base/Link.vue';
import Sell from './Sell.vue';

const sells = [
  {
    title: 'Set up your wallet',
    icon: '/img/icons/1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },

  {
    title: 'Add your NFT’s',
    icon: '/img/icons/2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },

  {
    title: 'Promote your NFT’s',
    icon: '/img/icons/3.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },

  {
    title: 'Sell your NFT’s',
    icon: '/img/icons/4.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
];
</script>
