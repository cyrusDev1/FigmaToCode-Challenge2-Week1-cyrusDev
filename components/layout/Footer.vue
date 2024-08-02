<template>
  <footer>
    <div class="">
      <div class="py-3 border-b border-neutral-100">
        <Link to="/" class="">
          <img src="~/assets/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div class="xl:flex justify-between py-4">
        <span class="text-neutral-600 text-2xl font-semibold"
          >Create Explore & Collect Digital NFTs</span
        >
        <ul class="flex justify-center space-x-4 mt-2 xl:mt-0">
          <li><Link to="#" class="text-sm font-medium">Privacy</Link></li>
          <li>
            <Link to="#" class="text-sm font-medium">Terms & Conditions</Link>
          </li>
          <li><Link to="#" class="text-sm font-medium">About Us</Link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Link from '~/components/base/Link.vue';
</script>
