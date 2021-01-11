<template>
  <span
    :class="[{ selected: sortOption === text }, 'option']"
    @click="clickHandeler"
  >
    {{ text }}</span
  >
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "sortOption",
  props: {
    type: String,
    text: String,
    sortOption: String,
  },
  emits: ["nestedSetOptions"],
  setup(props, { emit }) {
    const store = useStore();

    const setSortOption = () =>
      store.commit(`set${props.type}Sort`, props.text);

    const setTopOptions = () => emit("nestedSetOptions");

    const clickHandeler = props.type ? setSortOption : setTopOptions;

    return { clickHandeler };
  },
};
</script>

<style>
.option {
  color: #6b6b6b;
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 20px;
  cursor: pointer;
}

.selected {
  color: #1985e9;
}
</style>
