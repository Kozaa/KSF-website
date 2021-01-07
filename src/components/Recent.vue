<template>
  <div>
    <div>
      <span class="title">Recent</span>
      <SortOption
        v-for="(option, i) in options"
        :key="i"
        :text="option"
        :sortOption="recentSortOption"
      />
    </div>
    <div class="msgFeed">
      <RecentMsg
        v-for="(msg, i) in data.recent.slice(0, 4)"
        :key="i"
        :msg="msg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import RecentMsg from "./RecentMsg.vue";
import SortOption from "./SortOption.vue";
import data from "../assets/data/data";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Recent",
  components: {
    RecentMsg,
    SortOption,
  },
  setup() {
    console.log(data);
    console.log("recent");

    const store = useStore();
    const recentSortOption = computed(() => store.state.recentSort);

    const options = ["map", "top10", "stage", "bonus"];

    return { data, options, recentSortOption };
  },
};
</script>

<style>
.msgFeed {
  width: auto;
  min-width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.title {
  font-size: 1.6rem;
  font-weight: 700;
}
</style>
