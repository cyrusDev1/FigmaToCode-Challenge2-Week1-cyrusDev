<template>
  <div class="xl:flex relative items-start justify-between py-12 xl:py-24">
    <div
      class="text-left transform transition-transform duration-1000 ease-in-out"
    >
      <h1
        class="text-5xl leading-snug xl:leading-none md:text-9xl xl:text-[120px] leading-none font-regular"
      >
        See the NFT new world
      </h1>
      <p
        class="mt-4 text-base text-neutral-400 font-semibold w-full md:w-2/3 xl:w-1/2"
      >
        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, di
      </p>
      <div class="mt-8 flex items-center space-x-6">
        <span class="cursor-pointer text-neutral-600 text-base font-semibold"
          >Discover Vow</span
        >
        <Link
          to="#"
          class="hover:translate-x-1 border border-neutral-600 p-2 rounded-full"
          ><img src="~/assets/img/icons/move-right.svg"
        /></Link>
      </div>
    </div>

    <div class="pt-8 transform transition-transform duration-1000 ease-in-out">
      <img
        class="absolute w-1/3 md:w-1/6 xl:w-1/3 left-1/2 md:left-[310px] xl:left-1"
        ref="imageRef"
        src="~/assets/img/circle.svg"
        alt=""
      />
      <div
        class="pl-4 flex space-x-8 xl:space-x-4 md:justify-center xl:justify-end overflow-hidden xl:overflow-visible pt-8 pb-20 md:px-10 xl:px-0 xl:pb-0 md:pb-24"
      >
        <img
          class="w-2/3 md:w-1/3 top-16 xl:relative xl:w-2/3"
          style="position: relative"
          ref="image1Ref"
          src="~/assets/img/1.png"
          alt=""
        />
        <img
          class="w-2/3 md:w-1/3 xl:relative xl:w-2/3"
          ref="image2Ref"
          src="~/assets/img/2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from '~/components/base/Link.vue';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const isAnimated = ref(false);
const imageRef = ref(null);
const image1Ref = ref(null);
const image2Ref = ref(null);

onMounted(() => {
  setTimeout(() => {
    isAnimated.value = true;
  }, 0);

  gsap.to(imageRef.value, {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: 'power2.inOut',
  });

  gsap.to([image1Ref.value, image2Ref.value], {
    y: 5,
    duration: 1, // Adjust duration as needed
    yoyo: true,
    repeat: -1,
    ease: 'power2.inOut',
  });

  gsap.to([image1Ref.value], {
    y: -5,
    duration: 1, // Adjust duration as needed
    yoyo: true,
    repeat: -1,
    ease: 'power2.inOut',
  });
});
</script>

<style scoped></style>
