<template>
  <main class="home">
    <Recent class="gridItem recent" />
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
  </main>
</template>

<script lang="ts">
import Recent from "../components/Recent.vue";

export default {
  name: "Home",
  components: {
    Recent,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100vh - 130px);
  display: grid;
  grid-template-columns: 40% 40% 20%;
  grid-template-rows: 20% 65% 15%;
  border: 1px solid #6b6b6b;
}

.gridItem {
  width: 100%;
  height: 100%;
  border: 1px solid #6b6b6b;
}

.recent {
  grid-column: 1/3;
  padding: 10px;
  padding-left: 20px;
}
</style>
