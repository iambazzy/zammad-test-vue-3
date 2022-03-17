<template>
  <div class="bg-gray-800 w-72 shadow-lg rounded p-2 my-4">
    <div class="group relative">
      <img alt="Placeholder" class="block object-cover h-48 w-full rounded" :src="cardData.image">
      <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
        <button class="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
          <router-link :to="`/task-details/${cardData.episode_id}`"> 
            See episode {{ cardData.episode }}
          </router-link>
        </button>
      </div>
    </div>
    <div class="p-2">
      <h3 class="text-white text-md font-bold justify-center">{{ cardData.title }}</h3>
      <p class="text-gray-400 text-md">Season {{ cardData.season }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    cardData: {
      type: Object,
      default: () => {}
    }
  })
</script>
