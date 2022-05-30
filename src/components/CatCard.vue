<template>
  <span class="cats__cat">
    <img :src="url" alt="Котик" class="cats__image" />
    <button class="cats__button"></button>
  </span>
</template>

<script>
export default {
  name: "CatCard",
  props: ["url"],
};
</script>

<style scoped lang="scss">
.cats {
  &__image {
    width: 225px;
    height: 225px;
    object-fit: cover;
  }
  &__cat {
    transition: all 0.2s ease-in-out;
    &:hover {
      .cats__button {
        display: block;
      }
      transition: all 0.2s ease-in-out;
      box-shadow: 0 6px 5px rgba(0, 0, 0, 0.24), 0 9px 18px rgba(0, 0, 0, 0.18);
      transform: scale(1.2);
    }
    position: relative;
    cursor: pointer;
  }
  &__button {
    display: none;
    width: 48px;
    height: 48px;
    z-index: 2;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-style: none;
    background-color: transparent;
    background-image: url("../assets/favorite_border.svg");
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-image: url("../assets/favorite.svg");
    }
  }
}
</style>
