<template>
  <div class="wrapper">
    <TopOptions :options="optionState" @setOptions="handleSetOptions" />
    <TopTable :data="sortedData" :style="style" />
  </div>
</template>

<script lang="ts">
import { computed, reactive } from "vue";
import TopOptions from "./TopOptions.vue";
import TopTable from "./TopTable.vue";
import data from "../assets/data/data";

interface Player {
  fwRank: number;
  hswRank: number;
  swRank: number;
  bwRank: number;
  name: string;
  stageWR: number;
  mapWR: number;
  points: number;
}

type Game = "CS:S" | "CS:GO";
type Style = "forwards" | "half-sideways" | "sideways" | "backwards";
type Category = "Points" | "Stage WR" | "Map WR";

interface Options {
  game: Game;
  style: Style;
  category: Category;
}

export default {
  name: "Top",
  components: {
    TopOptions,
    TopTable,
  },
  setup() {
    const optionState = reactive<Options>({
      game: "CS:S",
      style: "forwards",
      category: "Points",
    });

    const handleSetOptions = (
      e: Event,
      newGame: Game,
      newStyle: Style,
      newCategory: Category
    ) => {
      optionState.game = newGame;
      optionState.style = newStyle;
      optionState.category = newCategory;
    };

    const game = computed(() => (optionState.game === "CS:S" ? "CSS" : "CSGO"));
    const style = computed(() => {
      switch (optionState.style) {
        case "forwards":
          return "fwRank";
        case "half-sideways":
          return "hswRank";
        case "sideways":
          return "swRank";
        case "backwards":
          return "bwRank";
      }
    });
    const category = computed(() => {
      switch (optionState.category) {
        case "Points":
          return style.value;
        case "Stage WR":
          return "stageWR";
        case "Map WR":
          return "mapWR";
      }
    });

    const customSortCreator = (
      sortBy: "fwRank" | "hswRank" | "swRank" | "bwRank" | "stageWR" | "mapWR"
    ) => {
      const win = sortBy === "stageWR" || sortBy === "mapWR" ? -1 : 1;
      const lose = -win;
      return (player1: Player, player2: Player) => {
        console.log("sorting by ", sortBy);
        if (player1[sortBy] > player2[sortBy]) {
          return win;
        } else if (player1[sortBy] === player2[sortBy]) {
          return 0;
        } else {
          return lose;
        }
      };
    };

    const sortedData = computed(() => {
      let players = data.players[game.value];

      players = players.sort(customSortCreator(style.value));

      if (category.value !== style.value) {
        players = players.sort(customSortCreator(category.value));
      }
      console.log(players);
      return players;
    });

    return { optionState, sortedData, handleSetOptions, style };
  },
};
</script>

<style lang="scss" scoped></style>
