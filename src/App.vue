<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    console.log("yo");
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  /* font-size: 14px; */
  font-size: calc(1vw);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;

  color: white;
  background-color: black;
  background-image: url(./assets/images/mainBackground.png);
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #app {
    min-width: 100%;
    min-height: 100vh;
  }
}

input,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

@media screen and (max-width: 768px) {
  :root {
    font-size: 10px;
  }
}
</style>
