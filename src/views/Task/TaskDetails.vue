<template>
  <div class="flex container mx-auto mt-4">
    <div class="w-1/2">
      <img :src="placeholder" class="rounded-lg" />
    </div>

    <div class="w-1/2 px-8">
      <loader :showLoadingText="false" v-if="loading" class="mt-16" />
      <div v-else>
        <h1 class="text-2xl">Showing details of {{ episodeDetails[0]?.title }}</h1>
        <h2 class="mt-4 font-bold text-xl">Characters:</h2>
        <ul class="pl-3">
          <li class="list-disc" v-for="(item, index) in episodeDetails[0]?.characters" :key="index" v-text="item" />
        </ul>
        <h2 class="mt-4">Aired: {{ new Date(episodeDetails[0]?.air_date).toDateString() }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'; 
  import { onMounted } from "vue";
  import { useRoute } from 'vue-router';
  import { mainStore } from '../../store/index';

  import Loader from '../../components/Base/Loader.vue'

  const route = useRoute();
  const store = mainStore();
  
  const { placeholder, episodeDetails, loading } = storeToRefs(store);

  onMounted(() => {
    store.getEpisodes(route.params.episode_id);
  });
</script>