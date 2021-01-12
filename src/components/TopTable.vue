<template>
  <div class="headerWrapper">
    <TableHeader
      v-for="category in categorys"
      :key="category"
      :text="category"
      :category="options.category"
      @nestedSetOptions="
        $emit('setOptions', $event, options.game, options.style, category)
      "
    />
  </div>
  <div class="wrapper">
    <TopPlayer
      v-for="(player, i) in data"
      :key="i"
      :i="i"
      :styleRank="player[style]"
      :player="player"
    />
    <span class="more">more</span>
  </div>
</template>

<script>
import TopPlayer from "./TopPlayer.vue";
import TableHeader from "./TableHeader.vue";

export default {
  props: ["data", "style", "options"],
  emits: ["setOptions"],
  components: {
    TopPlayer,
    TableHeader,
  },
  data() {
    return {
      categorys: ["Rank", "Name", "Stage WR", "Map WR", "Points"],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 74%;
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

.headerWrapper {
  width: 100%;
  height: 6%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;

  text-align: center;
}

.more {
  grid-column: 1/6;
  padding: 3px;
  color: #1985e9;
  cursor: pointer;
}
</style>
