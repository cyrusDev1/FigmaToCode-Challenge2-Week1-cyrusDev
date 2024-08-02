<template>
  <div class="my-16">
    <div
      class="bg relative rounded-large w-full flex justify-center items-center py-20"
    >
      <div class="text-center relative z-20 space-y-10 p-3 text-white">
        <h1 class="font-medium text-3xl xl:text-6xl">Build your NFT profile</h1>
        <p class="font-bold text-xs xl:text-xl">
          Join almost 10k NFT profiles on Digit !
        </p>
        <div>
          <Link
            class="hover:bg-neutral-50 py-3 px-4 rounded-3xl bg-white text-neutral-800 text-base"
            to="#"
            >Sign up now</Link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from '~/components/base/Link.vue';
import { ref, onMounted } from 'vue';
</script>

<style scoped>
.bg {
  background-image: url('~/assets/img/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.rounded-large {
  border-radius: 30px;
}
</style>
