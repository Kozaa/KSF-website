<template>
  <span class="title">
    <slot />
  </span>
</template>

<script>
export default {
  name: "SectionTitle",
};
</script>

<style>
.title {
  font-size: 1.6rem;
  font-weight: 700;
}
</style>
