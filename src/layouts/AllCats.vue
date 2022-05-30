<template>
  <div class="cats">
    <cat-card v-for="cat in store.cats" :key="cat" :url="cat.url"></cat-card>
  </div>
</template>

<script>
import { useCats } from "@/stores/catsStore";
import { onMounted } from "vue";
import CatCard from "@/components/CatCard";

export default {
  name: "AllCats",
  components: { CatCard },
  setup() {
    const store = useCats();
    onMounted(() => {
      store.getCats();
    });
    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.cats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 46px;
  padding-top: 48px;
}

@media (max-width: 533px) {
  .cats {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
