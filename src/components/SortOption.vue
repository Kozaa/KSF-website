<template>
  <span
    :class="[{ selected: sortOption === text }, 'option']"
    @click="setSortOption"
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
  setup(props) {
    const store = useStore();

    const setSortOption = () =>
      store.commit(`set${props.type}Sort`, props.text);

    return { setSortOption };
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
