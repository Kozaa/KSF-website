<template>
  <div>
    <div>
      <SectionTitle>Recent</SectionTitle>
      <SortOption
        v-for="(option, i) in options"
        :key="i"
        type="Recent"
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
import SectionTitle from "./SectionTitle.vue";
import data from "../assets/data/data";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Recent",
  components: {
    RecentMsg,
    SortOption,
    SectionTitle,
  },
  setup() {
    const store = useStore();
    const recentSortOption = computed(() => store.state.recentSort);

    const options = ["map", "top10", "stage", "bonus"];

    return { data, options, recentSortOption };
  },
};
</script>

<style lang="scss" scoped>
.msgFeed {
  width: auto;
  min-width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  overflow: hidden;
}
</style>
