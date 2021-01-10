<template>
  <div>
    <div class="options">
      <SectionTitle>Servers</SectionTitle>
      <SortOption type="Servers" :text="'CS:S'" :sortOption="sortOption" />
      <SortOption type="Servers" :text="'CS:GO'" :sortOption="sortOption" />
    </div>

    <div class="wrapper">
      <Server
        v-for="server in servers"
        :key="server.name"
        :name="server.name"
        :map="server.map"
        :details="server.details"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Server from "./Server.vue";
import SectionTitle from "./SectionTitle.vue";
import SortOption from "./SortOption.vue";
import data from "../assets/data/data";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Servers",
  components: {
    Server,
    SectionTitle,
    SortOption,
  },
  setup() {
    const store = useStore();

    const servers = computed(() =>
      store.state.serversSort === "CS:S" ? data.servers.CSS : data.servers.CSGO
    );
    const sortOption = computed(() => store.state.serversSort);

    return { servers, sortOption };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}

.options {
  height: 10%;
}
</style>
