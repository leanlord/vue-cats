<template>
  <the-header></the-header>
  <main class="main container">
    <router-view />
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}
.container {
  max-width: 1340px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
}
.main {
  margin-bottom: 40px;
}
* {
  box-sizing: border-box;
}
</style>
<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: { TheHeader },
};
</script>
