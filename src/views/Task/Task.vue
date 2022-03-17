<template>
  <div class="container mx-auto">
    <!-- LOADER -->
    <div v-if="loading" class="h-screen flex items-center justify-center">
      <loader />
    </div>

    <!-- MAIN DATA -->
    <div v-else>
      <app-heading class="my-4" title="The Breaking Bad" :count="episodesData.length" />
      <div class="flex flex-wrap justify-between">
        <card 
          v-for="(episode, index) in episodesData" 
          :key="index" 
          :cardData="episode" 
          @see-more="handleSeeMore"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { mainStore } from '../../store/index';
  import { onMounted } from 'vue';

  // LOCAL COMPONENTS FOR APPLICATION
  import Loader from '../../components/Base/Loader.vue';
  import Card from '../../components/Base/Card.vue';
  import AppHeading from '../../components/Base/AppHeading.vue';

  const store = mainStore();
  const { loading, episodesData } = storeToRefs(store);

  function getDataFromApi() {
    // Dont make an api call and pull from cache
    if (episodesData.value && episodesData.value.length > 0) return;

    // If data not in cache pull from api
    store.getEpisodes();
  }
  onMounted(() => {
    getDataFromApi();
  })
</script>