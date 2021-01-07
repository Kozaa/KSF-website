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
  font-size: 14px;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #app {
    min-width: 100%;
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
