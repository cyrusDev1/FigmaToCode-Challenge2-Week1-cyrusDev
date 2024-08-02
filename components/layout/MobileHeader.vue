<template>
  <header>
    <div class="py-4 space-y-10">
      <div class="mx-3 flex justify-between">
        <div>
          <Link to="/" class="">
            <img src="~/assets/img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div
          @click="openMenu()"
          class="bg-neutral-50 p-2 flex items-center rounded-lg max-w-auto"
        >
          <img src="~/assets/img/icons/bars.svg" alt="" />
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <div
        v-if="active"
        class="transform transition-transform duration-1000 ease-in-out border-r px-3 py-4 fixed z-40 h-screen w-full bg-white top-0"
      >
        <div class="flex justify-end">
          <div
            @click="closeMenu()"
            class="bg-neutral-50 p-2 flex items-center rounded-lg max-w-auto"
          >
            <img src="~/assets/img/icons/close.svg" alt="" />
          </div>
        </div>
        <div class="mt-20">
          <ul class="space-y-8">
            <li>
              <Link
                to="/"
                class="hover:text-neutral-900 text-neutral-700 text-xl font-semibold"
                >Home</Link
              >
            </li>
            <li>
              <Link
                to="#"
                class="hover:text-neutral-900 text-neutral-700 text-xl font-semibold"
                >Top sales</Link
              >
            </li>
            <li>
              <Link
                to="/"
                class="hover:text-neutral-900 text-neutral-700 text-xl font-semibold"
                >Collections</Link
              >
            </li>
            <li>
              <Link
                to="/"
                class="hover:text-neutral-900 text-neutral-700 text-xl font-semibold"
                >Our blog</Link
              >
            </li>
            <li>
              <Link
                to="/"
                class="hover:text-neutral-900 text-neutral-700 text-xl font-semibold"
                >About us</Link
              >
            </li>
          </ul>
        </div>
        <div class="mt-16 flex justify-center space-x-5 items-center">
          <div class="border-r-2 border-neutral-900 py-1 px-6">
            <Link
              to="/"
              class="hover:text-neutral-900 text-neutral-800 text-base font-semibold"
              >Sign up</Link
            >
          </div>
          <Button
            type="button"
            class="hover:opacity-90 border text-white py-2 px-3 rounded-3xl text-base bg-neutral-800 text-lg font-semibold"
            >Connect Wallet</Button
          >
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Link from '~/components/base/Link.vue';
import Button from '~/components/base/Button.vue';

const active = ref(false);

const openMenu = () => {
  active.value = true;
};
const closeMenu = () => {
  active.value = false;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    transform 1s ease-in-out,
    opacity 1s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
