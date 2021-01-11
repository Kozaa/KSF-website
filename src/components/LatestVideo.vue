<template>
  <div class="wrapper">
    <div class="details">
      <SectionTitle>
        Latest Video
      </SectionTitle>
      <div class="subTitle">
        surf_eon_fix WR. Surfed by Makela.
      </div>
    </div>
    <iframe
      width="100%"
      height="80%"
      src="https://www.youtube.com/embed/HLBYj5_EdFE"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "LatestVideo",
  components: {
    SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
.details {
  padding: 10px 20px;
  height: 20%;
}

.subTitle {
}
</style>
