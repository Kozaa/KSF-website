<template>
  <div class="wrapper">
    <span class="text">{{ data.text }}</span>
    <img :src="require(`@/assets/images/${data.img}`)" />
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.wrapper {
  width: 14%;
  display: flex;
  align-items: center;
  justify-items: center;
}

.text {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
  margin-right: 7px;
}
</style>
