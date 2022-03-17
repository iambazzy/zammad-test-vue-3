import { defineStore } from 'pinia';
import { baseUrl } from '../constants/api';
import { notify } from "notiwind"

export const mainStore = defineStore('mainStore', {
  state: () => ({
    episodes: [],
    episodeDetail: [],
    loading: false,
    placeholder: 'https://cdn.vox-cdn.com/thumbor/fE4aze4SafSmW7hYCC2Xtlvbm-0=/0x0:3200x1800/1200x675/filters:focal(1344x644:1856x1156)/cdn.vox-cdn.com/uploads/chorus_image/image/65354164/BB_.0.jpg'
  }),
  actions: {
    async getEpisodes(id = '') {
      try {
        this.loading = true;
        const data = await (await fetch(`${baseUrl}/episodes/${id}`)).json();
        if (!id) {
          this.episodes = data;
        } else {
          this.episodeDetail = data;
        }
        // Doing this delibrately so that you can see the loading part!
        setTimeout(() => {
          this.loading = false;
          notify({ group: "application", title: "Successfully Fetched" }, 500)
        }, 2000);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    episodeDetails: state => state.episodeDetail,
    episodesData: state => state.episodes.slice(0, 80).map(el => ({ ...el, image: state.placeholder }))
  }
});
