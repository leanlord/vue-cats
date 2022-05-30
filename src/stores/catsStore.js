import { defineStore } from "pinia";
import axios from "axios";

export const useCats = defineStore("main", {
  state: () => {
    return {
      cats: {},
    };
  },
  actions: {
    async getCats() {
      // setup api-key for header
      axios.defaults.headers.common["x-api-key"] =
        "655946da-9167-425f-b658-f9031355c516";
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          params: {
            limit: 15,
          },
        }
      );
      this.cats = data;
    },
  },
});
