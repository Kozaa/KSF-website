<template>
  <span :class="[{ background: i % 2 }, 'cell']">{{ styleRank }}</span>
  <span :class="[{ background: i % 2 }, 'cell']">{{ player.name }}</span>
  <span :class="[{ background: i % 2 }, 'cell']">{{ player.stageWR }}</span>
  <span :class="[{ background: i % 2 }, 'cell']">{{ player.mapWR }}</span>
  <span :class="[{ background: i % 2 }, 'cell']">{{
    player.points.toLocaleString()
  }}</span>
</template>

<script>
export default {
  props: ["player", "styleRank", "i"],
};
</script>

<style lang="scss" scoped>
.cell {
  padding: 2px;
  height: 100%;
}

.background {
  background-color: #232323;
}
</style>
