<template>
  <header class="py-4">
    <div class="flex items-center justify-between">
      <div>
        <Link to="/" class="">
          <img src="~/assets/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div>
        <ul class="flex space-x-8">
          <li>
            <Link
              to="/"
              class="hover:text-neutral-900 text-neutral-700 text-base font-semibold"
              >Home</Link
            >
          </li>
          <li>
            <Link
              to="#"
              class="hover:text-neutral-900 text-neutral-700 text-base font-semibold"
              >Top sales</Link
            >
          </li>
          <li>
            <Link
              to="/"
              class="hover:text-neutral-900 text-neutral-700 text-base font-semibold"
              >Collections</Link
            >
          </li>
          <li>
            <Link
              to="/"
              class="hover:text-neutral-900 text-neutral-700 text-base font-semibold"
              >Our blog</Link
            >
          </li>
          <li>
            <Link
              to="/"
              class="hover:text-neutral-900 text-neutral-700 text-base font-semibold"
              >About us</Link
            >
          </li>
        </ul>
      </div>
      <div class="flex justify-between space-x-5 items-center">
        <div class="border-r-2 border-neutral-900 py-1 px-6">
          <Link
            to="/"
            class="hover:text-neutral-900 text-neutral-800 text-base font-semibold"
            >Sign up</Link
          >
        </div>
        <Button
          type="button"
          class="hover:opacity-90 border text-white py-2 px-6 rounded-3xl text-base bg-neutral-800 text-lg font-semibold"
          >Connect Wallet</Button
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import Link from '~/components/base/Link.vue';
import Button from '~/components/base/Button.vue';
</script>
