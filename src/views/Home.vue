<template>
  <main class="home">
    <Recent class="gridItem recent" />
    <Servers class="gridItem servers" />
    <LatestVideo class="gridItem" style="padding: 0;" />

    <Top class="gridItem" style="padding: 0;" />
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
    <div class="gridItem">yo</div>
  </main>
</template>

<script lang="ts">
import Recent from "../components/Recent.vue";
import Servers from "../components/Servers.vue";
import LatestVideo from "../components/LatestVideo.vue";
import Top from "../components/Top.vue";

export default {
  name: "Home",
  components: {
    Recent,
    Servers,
    LatestVideo,
    Top,
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
  padding: 10px;
  border: 1px solid #6b6b6b;
}

.recent {
  grid-column: 1/3;

  padding-left: 20px;
}

.servers {
  grid-row: 1/3;
  grid-column: 3/4;
}
</style>
