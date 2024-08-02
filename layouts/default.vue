<template>
  <div class="bg-[#f8f8f8] relative">
    <div class="">
      <div class="border-l border-neutral-50 xl:mx-[140px]">
        <MobileHeader class="xl:hidden" />
        <Header class="hidden xl:block mx-3" />
      </div>
      <div class="border-b border-neutral-50"></div>
      <div class="border-l border-neutral-50 mx-3 xl:mx-[140px]">
        <slot />
      </div>
      <div class="border-l border-neutral-50 mx-3 xl:mx-[140px]">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue';
import MobileHeader from '~/components/layout/MobileHeader.vue';
import Footer from '~/components/layout/Footer.vue';

import { useHead } from 'nuxt/app';

useHead({
  title: 'Digit-NFT',
});
</script>

<style scoped></style>
