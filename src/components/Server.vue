<template>
  <div class="serverWrapper">
    <span class="name">
      {{ name }}
    </span>
    <div class="detailsWrapper">
      <div class="map">{{ map }}</div>
      <div class="details">
        {{ details[0] }} players, {{ details[1] }}min left
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  name: "Server",
  props: {
    name: {
      type: String,
    },
    map: {
      type: String,
    },
    details: {
      type: Object as PropType<[number, number]>,
    },
  },
};
</script>

<style lang="scss" scoped>
.serverWrapper {
  width: 100%;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.name {
  font-size: 1.5rem;
  color: #6b6b6b;
  text-align: center;
  width: 50%;
}

.detailsWrapper {
  max-width: 50%;
  display: inline-block;
  font-size: 1.2rem;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: solid white 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.map {
  font-size: 1em;
}

.details {
  font-size: 0.7em;
  color: #6b6b6b;
}
</style>
