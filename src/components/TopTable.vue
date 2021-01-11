<template>
  <div class="wrapper">
    <span>Rank</span>
    <span>Name</span>
    <span>Stage WR</span>
    <span>Map WR</span>
    <span>Points</span>
    <TopPlayer
      v-for="player in data"
      :key="player.fwRank"
      :styleRank="player[style]"
      :player="player"
      class="player"
    />
  </div>
</template>

<script>
import TopPlayer from "./TopPlayer.vue";
export default {
  props: ["data", "style"],
  components: {
    TopPlayer,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  align-items: center;
  align-content: flex-start;
  text-align: center;
  overflow-y: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}
</style>
