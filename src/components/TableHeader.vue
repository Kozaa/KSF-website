<template>
  <span
    :class="[{ selected: category === text }, 'title']"
    @click="$emit('nestedSetOptions')"
    >{{ text }}</span
  >
</template>

<script>
export default {
  props: ["text", "category"],
  emits: ["nestedSetOptions"],
};
</script>

<style lang="scss" scoped>
.title {
  white-space: nowrap;

  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:nth-child(2) {
    cursor: default;
  }
}

.selected {
  color: #1985e9;
}
</style>
