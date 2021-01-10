<template>
  <div class="wrapper">
    <div class="map">{{ msg.map }}</div>
    <div class="text">{{ msg.name }} on {{ msg.server }} server</div>
    <div class="subText">
      in {{ msg.time }} (WR<span class="green">{{ msg.improvedBy }}</span
      >) (23min ago)
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface MsgType {
  name: string;
  map: string;
  time: string;
  improvedBy: string;
  server: string;
}

export default defineComponent({
  name: "RecentMsg",
  props: {
    msg: {
      type: Object as PropType<MsgType>,
      required: true,
    },
  },
  setup() {
    console.log("recentmsg");
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  min-width: 210px;
  padding: 5px 20px;
  width: 25%;

  .map {
    font-size: 1.2em;
    font-weight: 700;
    transform: translateX(-5px);
  }

  .subText {
    .green {
      color: #30f100;
    }
  }
}
</style>
