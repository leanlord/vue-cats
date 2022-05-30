import { defineStore } from "pinia";

export const useCats = defineStore("main", {
  state: () => {
    return {
      cats: {},
    };
  },
});
