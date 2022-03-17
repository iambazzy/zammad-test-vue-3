<template>
  <div class="flex justify-between items-center">
    <h1 class="text-4xl font-bold">{{ title }}</h1>
    <div class="flex flex-col justify-end items-end">
      <h3 class="text-lg font-bold">{{ count }} Episodes</h3>
      <small>
        <a class="text-indigo-600 underline" href="https://breakingbadapi.com/api/episodes">
          https://breakingbadapi.com/api/episodes
        </a>
      </small>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: () => 'The app title'
    },
    count: {
      type: Number,
      default: () => 0
    }
  })
</script>
