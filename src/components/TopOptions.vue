<template>
  <div class="wrapper">
    <SectionTitle class="title">
      Top <br />
      Players
    </SectionTitle>
    <SortOption
      class="flexEnd"
      text="CS:S"
      :sortOption="options.game"
      @nestedSetOptions="
        $emit('setOptions', $event, 'CS:S', options.style, options.category)
      "
    />
    <SortOption
      class="flexEnd"
      text="CS:GO"
      :sortOption="options.game"
      @nestedSetOptions="
        $emit('setOptions', $event, 'CS:GO', options.style, options.category)
      "
    />
    <span></span>
    <span></span>
    <SortOption
      v-for="option in styleOptions"
      class="flexStart"
      :key="option"
      :text="option"
      :sortOption="options.style"
      @nestedSetOptions="
        $emit('setOptions', $event, options.game, option, options.category)
      "
    />
  </div>
</template>

<script>
import { PropType } from "vue";
import SectionTitle from "./SectionTitle.vue";
import SortOption from "./SortOption.vue";

export default {
  name: "TopOptions",
  props: ["options"],
  components: {
    SectionTitle,
    SortOption,
  },
  emits: ["setOptions"],

  setup() {
    const styleOptions = ["forwards", "half-sideways", "sideways", "backwards"];

    return { styleOptions };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 20%;
  width: 100%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  white-space: nowrap;
  align-items: center;

  text-align: center;

  .title {
    grid-row: 1/3;
  }

  .flexEnd {
    align-self: flex-end;
  }
  .flexStart {
    align-self: flex-start;
  }
}
</style>
