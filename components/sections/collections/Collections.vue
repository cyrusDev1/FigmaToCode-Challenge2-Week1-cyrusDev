<template>
  <div class="mt-0 md:my-12 space-y-6 relative">
    <h2 class="text-neutral-800 font-bold text-xl">Our Collections</h2>
    <div class="xl:flex justify-between xl:items-center">
      <ul class="flex space-x-4 overflow-x-auto scrollbar-hide">
        <li
          v-for="category in categories"
          :key="category"
          @click="setActiveCategory(category)"
          @mouseover="setHoverCategory(category)"
          @mouseleave="clearHoverCategory"
          :class="getCategoryClasses(category)"
        >
          <Link to="" class="text-sm">{{ category }}</Link>
        </li>
      </ul>
      <Link to="" class="font-semibold cursor-pointer underline text-sm mt-2"
        >View more</Link
      >
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-5 xl:px-0"
    >
      <div v-for="collection in nftCollections">
        <Collection :collection="collection"></Collection>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Link from '~/components/base/Link.vue';
import Collection from './Collection.vue';

const categories = ['All categories', 'Art', 'Celebrities', 'Gaming', 'Sport'];
const activeCategory = ref(categories[0]);
const hoverCategory = ref(null);

const nftCollections = [
  { name: 'CyberPunk', image: '/img/collections/1.png', price: 68 },
  { name: 'Durolost Boll - Upper', image: '/img/collections/2.png', price: 68 },
  { name: 'Space X Wiper', image: '/img/collections/3.png', price: 68 },
  { name: 'Snoop Dogg', image: '/img/collections/4.png', price: 68 },
];

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

const setHoverCategory = (category) => {
  hoverCategory.value = category;
};

const clearHoverCategory = () => {
  hoverCategory.value = null;
};

const getCategoryClasses = (category) => {
  return [
    'cursor-pointer font-semibold py-2 px-6 whitespace-nowrap rounded-lg text-sm transition-colors duration-100',
    activeCategory.value === category || hoverCategory.value === category
      ? 'text-neutral-50 bg-black'
      : 'bg-neutral-50 text-neutral-800',
  ];
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
