<template>
  <div class="flex flex-col items-center">
    <div class="animate-pulse rounded-full flex items-center justify-center bg-black h-32 w-32">
      <img class="w-20 h-20" src="../../assets/logo.svg" />
    </div>
    <small v-if="showLoadingText" class="font-light text-lg mt-3">Please be patient! It will take 2 seconds.</small>
  </div>
</template>

<script setup>
defineProps({
  showLoadingText: {
    type: Boolean,
    default: () => true,
  }
})
</script>