<template>
  <header class="header">
    <div class="container">
      <nav class="nav header__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link class="nav__link" to="/">Все котики</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/favourites"
              >Любимые котики</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
.header {
  box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
  background-color: #2196f3;
  &__nav {
    margin: 0;
  }
}
.nav {
  padding-top: 22px;
  padding-bottom: 22px;
  &__list {
    display: flex;
    align-items: center;
  }

  &__link {
    height: 64px;
    padding: 23px 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-decoration: none;
    letter-spacing: 0.25px;
    color: white;
    &:hover {
      background-color: #1e88e5;
    }
  }
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
