<template>
  <span class="option"> {{ text }}</span>
</template>

<script>
export default {
  name: "sortOption",
  props: {
    text: String,
  },
};
</script>

<style>
.option {
  color: #6b6b6b;
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 20px;
}
</style>
