<template>
  <div class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100">
    <notify />
    <router-view />
  </div>
</template>

<script setup>
import Notify from './components/Base/Notify.vue';
</script>
